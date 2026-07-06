'use strict';


const vibeInput         = document.getElementById('vibe-input');
const generateBtn       = document.getElementById('generate-btn');
const surpriseBtn       = document.getElementById('surprise-btn');
const browseBtn         = document.getElementById('browse-btn');
const ambientBtn        = document.getElementById('ambient-btn');
const charCounter       = document.getElementById('char-counter');
const loadingState      = document.getElementById('loading-state');
const loadingText       = document.getElementById('loading-text');
const paletteOutput     = document.getElementById('palette-output');
const historySection    = document.getElementById('history-section');
const historyGrid       = document.getElementById('history-grid');
const clearHistoryBtn   = document.getElementById('clear-history-btn');
const toastEl           = document.getElementById('toast');

const colorModal        = document.getElementById('color-modal');
const colorModalBg      = document.getElementById('color-modal-bg');
const colorModalClose   = document.getElementById('color-modal-close');
const colorModalHex     = document.getElementById('color-modal-hex');
const colorModalName    = document.getElementById('color-modal-name');
const colorModalRole    = document.getElementById('color-modal-role');
const colorModalPsych   = document.getElementById('color-modal-psychology');
const colorModalWcag    = document.getElementById('color-modal-wcag');
const colorModalCopy    = document.getElementById('color-modal-copy');


const galleryModal      = document.getElementById('gallery-modal');
const galleryModalClose = document.getElementById('gallery-modal-close');
const galleryBackdrop   = document.getElementById('gallery-modal-backdrop');
const galleryGrid       = document.getElementById('gallery-grid');
const gallerySearch     = document.getElementById('gallery-search');
const galleryFilterChips = document.getElementById('gallery-filter-chips');
const galleryCount      = document.getElementById('gallery-count');


const storyModal        = document.getElementById('story-modal');
const storyClose        = document.getElementById('story-close');
const storyBg           = document.getElementById('story-bg');
const storyProgress     = document.getElementById('story-progress');
const storyHex          = document.getElementById('story-hex');
const storyName         = document.getElementById('story-name');
const storyRole         = document.getElementById('story-role');
const storyPsych        = document.getElementById('story-psych');
const storyPrev         = document.getElementById('story-prev');
const storyNext         = document.getElementById('story-next');
const storyDots         = document.getElementById('story-dots');
const storyAuto         = document.getElementById('story-auto');


let sessionHistory = [];
try {
  const stored = localStorage.getItem('chroma_mood_history');
  if (stored) sessionHistory = JSON.parse(stored);
} catch(e) {}
let toastTimer       = null;

let currentModalHex  = null;
let lastPalette      = null;
let ambientActive    = false;
let activeCVD        = 'normal';
let activeGalleryFilter = 'all';


let storyPalette = null;
let storyIndex = 0;
let storyTimer = null;
let storyAutoPlay = true;


const LOADING_MESSAGES = [
  'Summoning your palette…',
  'Reading the emotional undertones…',
  'Mixing light and shadow…',
  'Consulting the color wheel…',
  'Translating feelings into hues…',
  'Finding the perfect shade of feeling…',
  'Composing your chromatic story…',
];


function init() {

  vibeInput.addEventListener('input', onInput);

  generateBtn.addEventListener('click', onGenerate);
  surpriseBtn.addEventListener('click', onSurprise);

  vibeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); onGenerate(); }
  });

  document.querySelectorAll('.mood-tag').forEach((tag) => {
    tag.addEventListener('click', () => {
      const vibe = tag.dataset.vibe;
      if (typeof vibe === 'string') {
        vibeInput.value = vibe;
        updateCharCounter(vibe.length);

        onGenerate();
      }
    });
  });

  colorModalClose.addEventListener('click', closeColorModal);
  colorModal.addEventListener('click', (e) => { if (e.target === colorModal) closeColorModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeColorModal();
      closeGalleryModal();
    }
  });

  colorModalCopy.addEventListener('click', () => {
    if (currentModalHex) {
      copyTextToClipboard(currentModalHex);
      showToast('✓ ' + currentModalHex.toUpperCase() + ' copied!');
    }
  });

  clearHistoryBtn.addEventListener('click', clearHistory);

  
  browseBtn.addEventListener('click', openGalleryModal);
  galleryModalClose.addEventListener('click', closeGalleryModal);
  galleryBackdrop.addEventListener('click', closeGalleryModal);
  gallerySearch.addEventListener('input', onGallerySearch);

  
  storyClose.addEventListener('click', closeColorStory);
  storyPrev.addEventListener('click', () => { storyAutoPlay = false; prevStorySlide(); });
  storyNext.addEventListener('click', () => { storyAutoPlay = false; nextStorySlide(); });
  storyAuto.addEventListener('click', () => {
    storyAutoPlay = !storyAutoPlay;
    storyAuto.classList.toggle('active', storyAutoPlay);
    if (storyAutoPlay) nextStorySlide();
  });
  document.addEventListener('keydown', (e) => {
    if (!storyModal.hasAttribute('hidden')) {
        if (e.key === 'Escape') closeColorStory();
      if (e.key === 'ArrowLeft') { storyAutoPlay = false; prevStorySlide(); }
      if (e.key === 'ArrowRight') { storyAutoPlay = false; nextStorySlide(); }
    }
  });

  
  ambientBtn.addEventListener('click', toggleAmbientMode);

  
  loadFromHash();

  
  renderHistory();
}



function onInput() {
  const len = vibeInput.value.length;
  updateCharCounter(len);
}

function updateCharCounter(len) {
  charCounter.textContent = len + ' / 500';
  charCounter.style.color = len > 450 ? 'var(--accent-rose)' : 'var(--text-muted)';
}


async function onGenerate() {
  const rawInput = vibeInput.value.trim();
  if (!rawInput) { showToast('✦ Describe a mood, feeling, or vibe to begin'); vibeInput.focus(); return; }
  if (rawInput.length > 500) { showToast('⚠ Please keep your description under 500 characters'); return; }

  const { palette } = findBestPalette(rawInput);
  await showPalette(palette, rawInput);
}

async function onSurprise() {
  const palette = getRandomPalette();
  const vibes = palette.keywords;
  const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
  vibeInput.value = randomVibe;
  updateCharCounter(randomVibe.length);
  await showPalette(palette, randomVibe);
}

async function showPalette(palette, rawInput) {
  generateBtn.disabled = true;
  surpriseBtn.disabled = true;


  setHidden(loadingState, false);
  setHidden(paletteOutput, true);

  await delay(5000);

  loadingState.classList.add('fade-out');
  
  await delay(400);

  setHidden(loadingState, true);
  loadingState.classList.remove('fade-out');
  
  lastPalette = palette;
  renderPalette(palette, rawInput);
  setHidden(paletteOutput, false);

  generateBtn.disabled = false;
  surpriseBtn.disabled = false;

  addToHistory(palette, rawInput);

  paletteOutput.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


function renderPalette(palette, rawInput) {
  paletteOutput.replaceChildren();
  activeCVD = 'normal'; 

  const card = document.createElement('div');
  card.className = 'palette-card fade-up-enter';

  
  card.appendChild(buildBanner(palette));

  
  card.appendChild(buildDNARow(palette));

  
  const swatchStrip = buildSwatchStrip(palette);
  card.appendChild(swatchStrip);

  
  card.appendChild(buildCVDToolbar(swatchStrip));

  
  card.appendChild(buildColorDetails(palette));

  
  card.appendChild(buildGradientStudio(palette));

  
  card.appendChild(buildInsights(palette));

  
  card.appendChild(buildFollowUp(palette));

  
  card.appendChild(buildActions(palette, rawInput));

  paletteOutput.appendChild(card);

  
  const mixerEl = document.getElementById('palette-mixer-section');
  if (mixerEl) mixerEl.remove();
  const mixer = buildPaletteMixer(palette);
  mixer.id = 'palette-mixer-section';
  paletteOutput.appendChild(mixer);

  
  if (ambientActive) applyAmbientColors(palette);
}


function buildBanner(palette) {
  const banner = document.createElement('div');
  banner.className = 'palette-banner';

  const gradient = document.createElement('div');
  gradient.className = 'palette-banner__gradient';
  const validHexes = palette.colors.map(c => sanitizeHex(c.hex)).filter(Boolean);
  
  gradient.style.background = 'linear-gradient(135deg, ' + validHexes.join(', ') + ')';

  const overlay = document.createElement('div');
  overlay.className = 'palette-banner__overlay';

  const shimmer = document.createElement('div');
  shimmer.className = 'palette-banner__shimmer';
  shimmer.setAttribute('aria-hidden', 'true');

  const content = document.createElement('div');
  content.className = 'palette-banner__content';

  const name = document.createElement('h2');
  name.className = 'palette-name';
  name.textContent = palette.name; 

  const desc = document.createElement('p');
  desc.className = 'palette-mood-desc';
  desc.textContent = palette.moodDesc; 

  content.appendChild(name);
  content.appendChild(desc);
  banner.appendChild(gradient);
  banner.appendChild(overlay);
  banner.appendChild(shimmer);
  banner.appendChild(content);
  return banner;
}


function buildDNARow(palette) {
  const row = document.createElement('div');
  row.className = 'palette-dna-row';

  
  const canvas = document.createElement('canvas');
  canvas.className = 'palette-dna-canvas';
  canvas.width = 80;
  canvas.height = 80;
  canvas.setAttribute('aria-label', palette.name + ' color ring');
  drawPaletteDNA(canvas, palette);
  row.appendChild(canvas);

  
  const meta = document.createElement('div');
  meta.className = 'palette-dna-meta';

  const label = document.createElement('div');
  label.className = 'palette-dna-meta__label';
  label.textContent = 'Palette Tones';
  meta.appendChild(label);

  const toneTags = document.createElement('div');
  toneTags.className = 'palette-tone-tags';

  (palette.tones || []).forEach((tone) => {
    const tag = document.createElement('span');
    tag.className = 'tone-tag';
    tag.textContent = tone; 
    toneTags.appendChild(tag);
  });

  
  const countTag = document.createElement('span');
  countTag.className = 'tone-tag';
  countTag.textContent = palette.colors.length + ' colors';
  toneTags.appendChild(countTag);

  meta.appendChild(toneTags);
  row.appendChild(meta);
  return row;
}

function drawPaletteDNA(canvas, palette) {
  const ctx = canvas.getContext('2d');
  const size = canvas.width;
  const cx = size / 2, cy = size / 2;
  const outerR = size * 0.44;
  const innerR = size * 0.26;
  const n = palette.colors.length;
  const gap = 0.06;

  ctx.clearRect(0, 0, size, size);

  palette.colors.forEach((color, i) => {
    const safeHex = sanitizeHex(color.hex);
    if (!safeHex) return;
    const startAngle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const endAngle   = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2 - gap;

    ctx.beginPath();
    ctx.arc(cx, cy, outerR, startAngle, endAngle);
    ctx.arc(cx, cy, innerR, endAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = safeHex; 
    ctx.fill();
  });

  
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, innerR * 0.9);
  grad.addColorStop(0, 'rgba(124,93,244,0.15)');
  grad.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
  }


function buildSwatchStrip(palette) {
  const strip = document.createElement('div');
  strip.className = 'color-swatches';
  strip.setAttribute('role', 'list');
  strip.setAttribute('aria-label', 'Color swatches — click for details');

  palette.colors.forEach((color, idx) => {
    const safeHex = sanitizeHex(color.hex);
    if (!safeHex) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'color-swatch';
    wrapper.setAttribute('role', 'listitem');
    wrapper.setAttribute('tabindex', '0');
    wrapper.setAttribute('aria-label', color.name + ' — ' + safeHex.toUpperCase() + '. Click for details.');

    const block = document.createElement('div');
    block.className = 'color-swatch__block';
    block.style.backgroundColor = safeHex; 

    
    block.style.animationDelay = (idx * 0.06) + 's';
    wrapper.classList.add('color-swatch--animate');

    const hint = document.createElement('span');
    hint.className = 'color-swatch__copy-hint';
    hint.setAttribute('aria-hidden', 'true');
    hint.textContent = 'View';

    const info = document.createElement('div');
    info.className = 'color-swatch__info';

    const hexSpan = document.createElement('span');
    hexSpan.className = 'color-swatch__hex';
    hexSpan.textContent = safeHex.toUpperCase();

    const nameSpan = document.createElement('span');
    nameSpan.className = 'color-swatch__name';
    nameSpan.textContent = color.name;

    const textColor = isLightColor(safeHex) ? '#1a1a2e' : '#f0eff8';
    hexSpan.style.color = textColor;
    nameSpan.style.color = textColor;

    info.appendChild(hexSpan);
    info.appendChild(nameSpan);
    block.appendChild(hint);
    block.appendChild(info);
    wrapper.appendChild(block);

    const openModal = () => openColorModal(color, safeHex);
    wrapper.addEventListener('click', openModal);
    wrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); }
    });

    strip.appendChild(wrapper);
    });
  return strip;
}


function buildColorDetails(palette) {
  const grid = document.createElement('div');
  grid.className = 'color-details';

  palette.colors.forEach((color, idx) => {
    const safeHex = sanitizeHex(color.hex);
    if (!safeHex) return;

    const card = document.createElement('div');
    card.className = 'color-detail-card';
    card.style.animationDelay = (idx * 0.07) + 's';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'View ' + color.name + ' details');

    const dot = document.createElement('div');
    dot.className = 'color-detail-dot';
    dot.style.backgroundColor = safeHex;
    dot.setAttribute('aria-hidden', 'true');

    const info = document.createElement('div');
    info.className = 'color-detail-info';

    const hexEl = document.createElement('div');
    hexEl.className = 'color-detail-hex';
    hexEl.textContent = safeHex.toUpperCase();

    const nameEl = document.createElement('div');
    nameEl.className = 'color-detail-name';
    nameEl.textContent = color.name;

    const badges = document.createElement('div');
    badges.className = 'color-detail-badges';

    const roleEl = document.createElement('span');
    roleEl.className = 'color-detail-role';
    roleEl.textContent = color.role;
    badges.appendChild(roleEl);

    
    const wcag = wcagRating(safeHex);
    const wcagEl = document.createElement('span');
    wcagEl.className = 'wcag-badge ' + wcag.cls;
    wcagEl.textContent = 'WCAG ' + wcag.label + ' ' + wcag.ratio + ':1';
    wcagEl.setAttribute('title', 'Contrast ratio: ' + wcag.ratio + ':1 (best against white or black)');
    badges.appendChild(wcagEl);

    const psychEl = document.createElement('p');
    psychEl.className = 'color-detail-psychology';
    psychEl.textContent = color.psychology;

    info.appendChild(hexEl);
    info.appendChild(nameEl);
    info.appendChild(badges);
    info.appendChild(psychEl);
      card.appendChild(dot);
    card.appendChild(info);

    const openModal = () => openColorModal(color, safeHex);
    card.addEventListener('click', openModal);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); }
    });

    grid.appendChild(card);
  });
  return grid;
}


function buildInsights(palette) {
  const section = document.createElement('div');
  section.className = 'palette-insights';
  section.appendChild(buildInsightBlock('✦', 'Design Contexts', palette.designs));
  section.appendChild(buildInsightBlock('◎', 'Complementary Elements', palette.complementary));
  return section;
}

function buildInsightBlock(icon, title, items) {
  const block = document.createElement('div');
  block.className = 'insight-block';

  const titleEl = document.createElement('h3');
  titleEl.className = 'insight-block__title';

  const iconSpan = document.createElement('span');
  iconSpan.setAttribute('aria-hidden', 'true');
  iconSpan.textContent = icon;

  titleEl.appendChild(iconSpan);
  titleEl.appendChild(document.createTextNode(' ' + title));
  block.appendChild(titleEl);

  const list = document.createElement('ul');
  list.className = 'insight-list';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'insight-list__item';
    li.textContent = item;
    list.appendChild(li);
  });
  block.appendChild(list);
  return block;
}


function buildFollowUp(palette) {
  const section = document.createElement('div');
  section.className = 'follow-up';

  const label = document.createElement('div');
  label.className = 'follow-up__label';
  label.textContent = '✦ Iterate';
  section.appendChild(label);

  const question = document.createElement('p');
  question.className = 'follow-up__question';
  buildFollowUpText(question, palette.followUp || '');
  section.appendChild(question);

  if (palette.followUpOptions && palette.followUpOptions.length) {
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'follow-up-options';

    palette.followUpOptions.forEach((option) => {
      const btn = document.createElement('button');
      btn.className = 'follow-up-option';
      btn.type = 'button';
      btn.textContent = option; 
      btn.addEventListener('click', () => {
        
        const current = vibeInput.value.trim();
        vibeInput.value = current + ' — ' + option;
        updateCharCounter(vibeInput.value.length);
        onGenerate();
        });
      optionsDiv.appendChild(btn);
    });
    section.appendChild(optionsDiv);
  }

  return section;
}

function buildFollowUpText(container, text) {
  
  const parts = text.split(/\*\*(.*?)\*\*/g);
  parts.forEach((part, i) => {
    if (i % 2 === 1) {
      
      const strong = document.createElement('strong');
      strong.textContent = part;
      container.appendChild(strong);
    } else {
      container.appendChild(document.createTextNode(part));
      }
  });
}


function buildActions(palette, rawInput) {
  const div = document.createElement('div');
  div.className = 'palette-actions';

  div.appendChild(makeActionBtn('Play Story', '▶', 'primary', () => {
    openColorStory(palette);
  }));

  div.appendChild(makeActionBtn('Share Link', '🔗', 'primary', () => {
    copyShareLink(palette);
  }));

  div.appendChild(makeActionBtn('Share Card', '📸', 'primary', () => {
    exportShareCard(palette);
  }));

  div.appendChild(makeActionBtn('Copy All Hex', '⊕', 'secondary', () => {
    const allHex = palette.colors.map(c => sanitizeHex(c.hex)).filter(Boolean).join('  ');
    copyTextToClipboard(allHex);
    showToast('✓ All hex codes copied!');
  }));

  div.appendChild(makeActionBtn('Export CSS', '↓', 'secondary', () => exportCSS(palette)));
  div.appendChild(makeActionBtn('Export PNG', '◼', 'secondary', () => exportPNG(palette)));

  div.appendChild(makeActionBtn('Try Again', '↻', 'secondary', () => {
    setTimeout(() => { vibeInput.focus(); vibeInput.select(); }, 100);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }));

  return div;
}

function makeActionBtn(label, icon, variant, onClick) {
  const btn = document.createElement('button');
  btn.className = 'action-btn action-btn--' + variant;
  btn.type = 'button';

  const iconSpan = document.createElement('span');
  iconSpan.setAttribute('aria-hidden', 'true');
  iconSpan.textContent = icon;

  const labelSpan = document.createElement('span');
  labelSpan.textContent = label;

  btn.appendChild(iconSpan);
  btn.appendChild(labelSpan);
  btn.addEventListener('click', onClick);
  return btn;
}


function openColorModal(color, safeHex) {
  currentModalHex = safeHex;

  
  colorModalBg.style.backgroundColor = safeHex; 

  
  colorModalHex.textContent  = safeHex.toUpperCase();
  colorModalName.textContent = color.name;
  colorModalRole.textContent = color.role;
  colorModalPsych.textContent = color.psychology;

  
  const textColor = isLightColor(safeHex) ? 'rgba(26,26,46,0.95)' : 'rgba(255,255,255,0.95)';
  colorModalHex.style.color  = textColor;
  colorModalName.style.color = textColor;
  colorModalRole.style.color = textColor;
  colorModalPsych.style.color = textColor;

  
  colorModalWcag.replaceChildren();
  const wcag = wcagRating(safeHex);
  const badge = document.createElement('span');
  badge.className = 'wcag-badge ' + wcag.cls;
  badge.textContent = 'WCAG ' + wcag.label + '  ' + wcag.ratio + ':1';
  colorModalWcag.appendChild(badge);

  
  colorModalCopy.textContent = 'Copy ' + safeHex.toUpperCase();

  colorModal.hidden = false;
  colorModalClose.focus();
  document.body.style.overflow = 'hidden';
}

function closeColorModal() {
  colorModal.hidden = true;
  currentModalHex = null;
  document.body.style.overflow = '';
}

function addToHistory(palette, rawInput) {
  if (sessionHistory.length > 0 && sessionHistory[sessionHistory.length - 1].palette.name === palette.name) return;
 if (sessionHistory.length >= 8) sessionHistory.shift();
  sessionHistory.push({ palette, vibe: rawInput });
  try { localStorage.setItem('chroma_mood_history', JSON.stringify(sessionHistory)); } catch(e) {}
  renderHistory();
}

function renderHistory() {
  if (sessionHistory.length === 0) { setHidden(historySection, true); return; }
  setHidden(historySection, false);
  historyGrid.replaceChildren();

  [...sessionHistory].reverse().forEach(({ palette, vibe }) => {
    historyGrid.appendChild(buildHistoryCard(palette, vibe));
  });
}

function buildHistoryCard(palette, vibe) {
  const card = document.createElement('div');
  card.className = 'history-card';
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', 'Revisit palette: ' + palette.name);

  
  const canvas = document.createElement('canvas');
  canvas.className = 'history-card__gradient';
  canvas.width = 300; canvas.height = 56;
  canvas.setAttribute('aria-hidden', 'true');
  drawHistoryGradient(canvas, palette);
  card.appendChild(canvas);

  const meta = document.createElement('div');
  meta.className = 'history-card__meta';

  const nameEl = document.createElement('div');
  nameEl.className = 'history-card__name';
  nameEl.textContent = palette.name;

  const vibeEl = document.createElement('div');
  vibeEl.className = 'history-card__vibe';
  vibeEl.textContent = vibe; 

  meta.appendChild(nameEl);
  meta.appendChild(vibeEl);
  card.appendChild(meta);

  const clickHandler = () => {
    renderPalette(palette, vibe);
    setHidden(paletteOutput, false);
    paletteOutput.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  card.addEventListener('click', clickHandler);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); clickHandler(); }
  });
  return card;
}

function drawHistoryGradient(canvas, palette) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  const validHexes = palette.colors.map(c => sanitizeHex(c.hex)).filter(Boolean);
  if (validHexes.length === 0) return;
  const grad = ctx.createLinearGradient(0, 0, w, 0);
  validHexes.forEach((hex, i) => {
    grad.addColorStop(i / (validHexes.length - 1 || 1), hex);
  });
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
}

function clearHistory() {
  sessionHistory.length = 0;
  try { localStorage.removeItem('chroma_mood_history'); } catch(e) {}
  renderHistory();
}


function exportCSS(palette) {
  const lines = ['/* ' + palette.name + ' — Sun Studios */\n:root {'];
  palette.colors.forEach((color) => {
    const safeHex = sanitizeHex(color.hex);
    if (!safeHex) return;
    const varName = '--color-' + color.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    lines.push('  ' + varName + ': ' + safeHex + '; ');
  });
  lines.push('}');
  copyTextToClipboard(lines.join('\n'));
  showToast('✓ CSS variables copied to clipboard!');
}

function exportJSON(palette) {
  const data = {
    name: palette.name,
    mood: palette.moodDesc,
    tones: palette.tones,
    colors: palette.colors.map(c => ({
      hex:         sanitizeHex(c.hex) || c.hex,
      name:        c.name,
      role:        c.role,
      psychology:  c.psychology,
      wcag:        wcagRating(sanitizeHex(c.hex) || c.hex)
    }))
  };
  copyTextToClipboard(JSON.stringify(data, null, 2));
  showToast('✓ JSON copied to clipboard!');
}

function exportPNG(palette) {
  const swatchW = 120, swatchH = 180, infoH = 110;
  const n = palette.colors.length;
  const canvas = document.createElement('canvas');
  canvas.width  = swatchW * n;
  canvas.height = swatchH + infoH;
  const ctx = canvas.getContext('2d');

  
  ctx.fillStyle = '#0a0a12';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
