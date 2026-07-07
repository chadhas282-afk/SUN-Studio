'use strict';


const vibeInput = document.getElementById('vibe-input');
const generateBtn = document.getElementById('generate-btn');
const surpriseBtn = document.getElementById('surprise-btn');
const browseBtn = document.getElementById('browse-btn');
const ambientBtn = document.getElementById('ambient-btn');
const charCounter = document.getElementById('char-counter');
const loadingState = document.getElementById('loading-state');
const loadingText = document.getElementById('loading-text');
const paletteOutput = document.getElementById('palette-output');
const historySection = document.getElementById('history-section');
const historyGrid = document.getElementById('history-grid');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const toastEl = document.getElementById('toast');

const colorModal = document.getElementById('color-modal');
const colorModalBg = document.getElementById('color-modal-bg');
const colorModalClose = document.getElementById('color-modal-close');
const colorModalHex = document.getElementById('color-modal-hex');
const colorModalName = document.getElementById('color-modal-name');
const colorModalRole = document.getElementById('color-modal-role');
const colorModalPsych = document.getElementById('color-modal-psychology');
const colorModalWcag = document.getElementById('color-modal-wcag');
const colorModalCopy = document.getElementById('color-modal-copy');


const galleryModal = document.getElementById('gallery-modal');
const galleryModalClose = document.getElementById('gallery-modal-close');
const galleryBackdrop = document.getElementById('gallery-modal-backdrop');
const galleryGrid = document.getElementById('gallery-grid');
const gallerySearch = document.getElementById('gallery-search');
const galleryFilterChips = document.getElementById('gallery-filter-chips');
const galleryCount = document.getElementById('gallery-count');


const storyModal = document.getElementById('story-modal');
const storyClose = document.getElementById('story-close');
const storyBg = document.getElementById('story-bg');
const storyProgress = document.getElementById('story-progress');
const storyHex = document.getElementById('story-hex');
const storyName = document.getElementById('story-name');
const storyRole = document.getElementById('story-role');
const storyPsych = document.getElementById('story-psych');
const storyPrev = document.getElementById('story-prev');
const storyNext = document.getElementById('story-next');
const storyDots = document.getElementById('story-dots');
const storyAuto = document.getElementById('story-auto');


let sessionHistory = [];
try {
  const stored = localStorage.getItem('chroma_mood_history');
  if (stored) sessionHistory = JSON.parse(stored);
} catch (e) { }
let toastTimer = null;

let currentModalHex = null;
let lastPalette = null;
let ambientActive = false;
let activeCVD = 'normal';
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
    const endAngle = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2 - gap;

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


  colorModalHex.textContent = safeHex.toUpperCase();
  colorModalName.textContent = color.name;
  colorModalRole.textContent = color.role;
  colorModalPsych.textContent = color.psychology;


  const textColor = isLightColor(safeHex) ? 'rgba(26,26,46,0.95)' : 'rgba(255,255,255,0.95)';
  colorModalHex.style.color = textColor;
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
  try { localStorage.setItem('chroma_mood_history', JSON.stringify(sessionHistory)); } catch (e) { }
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
  try { localStorage.removeItem('chroma_mood_history'); } catch (e) { }
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
      hex: sanitizeHex(c.hex) || c.hex,
      name: c.name,
      role: c.role,
      psychology: c.psychology,
      wcag: wcagRating(sanitizeHex(c.hex) || c.hex)
    }))
  };
  copyTextToClipboard(JSON.stringify(data, null, 2));
  showToast('✓ JSON copied to clipboard!');
}

function exportPNG(palette) {
  const swatchW = 120, swatchH = 180, infoH = 110;
  const n = palette.colors.length;
  const canvas = document.createElement('canvas');
  canvas.width = swatchW * n;
  canvas.height = swatchH + infoH;
  const ctx = canvas.getContext('2d');


  ctx.fillStyle = '#0a0a12';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  palette.colors.forEach((color, i) => {
    const safeHex = sanitizeHex(color.hex);
    if (!safeHex) return;
    const x = i * swatchW;


    ctx.fillStyle = safeHex;
    ctx.fillRect(x, 0, swatchW, swatchH);


    const grad = ctx.createLinearGradient(x, swatchH * 0.5, x, swatchH);
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(1, 'rgba(0,0,0,0.5)');
    ctx.fillStyle = grad;
    ctx.fillRect(x, 0, swatchW, swatchH);


    const textCol = isLightColor(safeHex) ? '#1a1a2e' : '#f0eff8';
    ctx.fillStyle = textCol;
    ctx.font = 'bold 10px monospace';
    ctx.fillText(safeHex.toUpperCase(), x + 8, swatchH - 28);
    ctx.font = '10px sans-serif';

    const displayName = color.name.length > 14 ? color.name.slice(0, 13) + '…' : color.name;
    ctx.fillText(displayName, x + 8, swatchH - 12);
  });


  ctx.fillStyle = '#111120';
  ctx.fillRect(0, swatchH, canvas.width, infoH);


  ctx.fillStyle = '#f0eff8';
  ctx.font = 'bold 18px serif';
  ctx.fillText(palette.name, 20, swatchH + 38);


  ctx.fillStyle = '#9b9ab8';
  ctx.font = '12px sans-serif';
  ctx.fillText('Generated by Sun Studios', 20, swatchH + 58);


  ctx.font = '10px monospace';
  palette.colors.forEach((color, i) => {
    const safeHex = sanitizeHex(color.hex);
    if (!safeHex) return;
    ctx.fillStyle = safeHex;
    ctx.fillRect(20 + i * 50, swatchH + 72, 12, 12);
    ctx.fillStyle = '#9b9ab8';
    ctx.fillText(safeHex.toUpperCase(), 20 + i * 50, swatchH + 96);
  });


  try {
    const link = document.createElement('a');
    link.download = palette.name.toLowerCase().replace(/\s+/g, '-') + '.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('✓ PNG downloaded!');
  } catch {
    showToast('⚠ PNG export failed — try a different browser');
  }
}


function updateHash(paletteName) {

  const slug = paletteName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  history.replaceState(null, '', '#' + slug);
}

function loadFromHash() {
  const hash = window.location.hash.replace('#', '').trim();
  if (!hash) return;
  const slug = hash.replace(/[^a-z0-9-]/g, '');
  const match = PALETTE_LIBRARY.find(p =>
    p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === slug
  );
  if (match) {
    setTimeout(() => showPalette(match, match.keywords[0]), 400);
    history.replaceState(null, '', window.location.pathname);
  }
}

function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(() => { });
  } else {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none;top:0;left:0;';
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    } catch (_) { }
  }
}


function showToast(message) {
  if (toastTimer) clearTimeout(toastTimer);
  toastEl.hidden = false;
  toastEl.textContent = message;
  toastEl.classList.add('toast--visible');
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('toast--visible');
    setTimeout(() => { toastEl.hidden = true; }, 300);
  }, 2600);
}


function setHidden(el, hidden) { el.hidden = hidden; }
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }


function buildCVDToolbar(swatchStripEl) {
  const toolbar = document.createElement('div');
  toolbar.className = 'cvd-toolbar';
  toolbar.setAttribute('role', 'group');
  toolbar.setAttribute('aria-label', 'Color vision deficiency simulation');

  const label = document.createElement('span');
  label.className = 'cvd-toolbar__label';
  label.textContent = '👁 Vision Simulation';
  toolbar.appendChild(label);

  const modes = [
    { id: 'normal', label: 'Normal' },
    { id: 'deuteranopia', label: 'Deuteranopia' },
    { id: 'protanopia', label: 'Protanopia' },
    { id: 'tritanopia', label: 'Tritanopia' },
    { id: 'achromatopsia', label: 'Greyscale' },
  ];

  modes.forEach((mode) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'cvd-btn' + (activeCVD === mode.id ? ' cvd-btn--active' : '');
    btn.textContent = mode.label;
    btn.setAttribute('aria-pressed', String(activeCVD === mode.id));
    btn.addEventListener('click', () => {
      activeCVD = mode.id;

      swatchStripEl.classList.remove('cvd-deuteranopia', 'cvd-protanopia', 'cvd-tritanopia', 'cvd-achromatopsia');
      if (mode.id !== 'normal') swatchStripEl.classList.add('cvd-' + mode.id);

      toolbar.querySelectorAll('.cvd-btn').forEach((b, i) => {
        const isActive = modes[i].id === mode.id;
        b.classList.toggle('cvd-btn--active', isActive);
        b.setAttribute('aria-pressed', String(isActive));
      });
      showToast('👁 Viewing as: ' + mode.label);
    });
    toolbar.appendChild(btn);
  });

  return toolbar;
}


function buildGradientStudio(palette) {
  const validHexes = palette.colors.map(c => sanitizeHex(c.hex)).filter(Boolean);
  if (validHexes.length < 2) return document.createDocumentFragment();


  const gradients = [
    {
      label: 'Linear →',
      css: 'linear-gradient(90deg, ' + validHexes.join(', ') + ')',
    },
    {
      label: 'Linear ↗',
      css: 'linear-gradient(135deg, ' + validHexes.join(', ') + ')',
    },
    {
      label: 'Radial',
      css: 'radial-gradient(ellipse at center, ' + validHexes.slice(0, 4).join(', ') + ')',
    },
    {
      label: 'Conic',
      css: 'conic-gradient(' + validHexes.join(', ') + ')',
    },
    {
      label: 'Split Primary',
      css: 'linear-gradient(90deg, ' + validHexes[0] + ' 0%, ' + validHexes[0] + ' 50%, ' + validHexes[1] + ' 50%, ' + validHexes[1] + ' 100%)',
    },
    {
      label: 'Soft Fade',
      css: 'linear-gradient(180deg, ' + validHexes[0] + '00 0%, ' + validHexes[Math.min(2, validHexes.length - 1)] + ' 100%)',
    },
  ];

  const section = document.createElement('div');
  section.className = 'gradient-studio';

  const header = document.createElement('div');
  header.className = 'gradient-studio__header';

  const title = document.createElement('div');
  title.className = 'gradient-studio__title';
  const titleIcon = document.createElement('span');
  titleIcon.setAttribute('aria-hidden', 'true');
  titleIcon.textContent = '∿';
  const titleText = document.createTextNode(' Gradient Studio');
  title.appendChild(titleIcon);
  title.appendChild(titleText);
  header.appendChild(title);
  section.appendChild(header);

  const grid = document.createElement('div');
  grid.className = 'gradient-previews';

  gradients.forEach((grad) => {
    const card = document.createElement('div');
    card.className = 'gradient-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', grad.label + ' gradient — click to copy CSS');

    const preview = document.createElement('div');
    preview.className = 'gradient-card__preview';
    preview.style.background = grad.css;

    const meta = document.createElement('div');
    meta.className = 'gradient-card__meta';

    const lbl = document.createElement('span');
    lbl.className = 'gradient-card__label';
    lbl.textContent = grad.label;

    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'gradient-card__copy';
    copyBtn.textContent = 'Copy CSS';
    const cssValue = 'background: ' + grad.css + ';';
    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      copyTextToClipboard(cssValue);
      showToast('✓ Gradient CSS copied!');
    });

    meta.appendChild(lbl);
    meta.appendChild(copyBtn);
    card.appendChild(preview);
    card.appendChild(meta);

    card.addEventListener('click', () => {
      copyTextToClipboard(cssValue);
      showToast('✓ Gradient CSS copied!');
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copyTextToClipboard(cssValue); showToast('✓ Gradient CSS copied!'); }
    });

    grid.appendChild(card);
  });

  section.appendChild(grid);
  return section;
}


function buildPaletteMixer(currentPalette) {
  const section = document.createElement('div');
  section.className = 'palette-mixer';

  const header = document.createElement('div');
  header.className = 'palette-mixer__header';

  const icon = document.createElement('span');
  icon.className = 'palette-mixer__icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = '⊕';

  const title = document.createElement('span');
  title.className = 'palette-mixer__title';
  title.textContent = 'Palette Mixer';
header.appendChild(icon);
  header.appendChild(title);
  section.appendChild(header);

  const subtitle = document.createElement('p');
  subtitle.className = 'palette-mixer__subtitle';
  subtitle.textContent = 'Blend two palettes together to create a unique hybrid combination.';
  section.appendChild(subtitle);

  const controls = document.createElement('div');
  controls.className = 'palette-mixer__controls';

  
  const selectA = document.createElement('select');
  selectA.className = 'palette-mixer__select';
  selectA.setAttribute('aria-label', 'First palette to blend');

  
  const selectB = document.createElement('select');
  selectB.className = 'palette-mixer__select';
  selectB.setAttribute('aria-label', 'Second palette to blend');

  
  PALETTE_LIBRARY.forEach((p, idx) => {
    const optA = document.createElement('option');
    optA.value = String(idx);
    optA.textContent = p.name; 
    if (p.name === currentPalette.name) optA.selected = true;
    selectA.appendChild(optA);

    const optB = document.createElement('option');
    optB.value = String(idx);
    optB.textContent = p.name; 
    
    if (idx === 1) optB.selected = true;
    selectB.appendChild(optB);
  });

  const operator = document.createElement('span');
  operator.className = 'palette-mixer__operator';
  operator.className = 'palette-mixer__operator';
  operator.setAttribute('aria-hidden', 'true');
  operator.textContent = '⊕';

  const blendBtn = document.createElement('button');
  blendBtn.type = 'button';
  blendBtn.className = 'palette-mixer__blend-btn';
  blendBtn.textContent = 'Blend';

  controls.appendChild(selectA);
  controls.appendChild(operator);
  controls.appendChild(selectB);
  controls.appendChild(blendBtn);
  section.appendChild(controls);

  
  const resultEl = document.createElement('div');
  resultEl.className = 'mixer-result';

  const strip = document.createElement('div');
  strip.className = 'mixer-result__strip';

  const resultLabel = document.createElement('div');
  resultLabel.className = 'mixer-result__label';

  const resultName = document.createElement('span');
  resultName.className = 'mixer-result__name';

  const copyMixBtn = document.createElement('button');
  copyMixBtn.type = 'button';
  copyMixBtn.className = 'gradient-card__copy';
  copyMixBtn.textContent = 'Copy All Hex';

  resultLabel.appendChild(resultName);
  resultLabel.appendChild(copyMixBtn);
  resultEl.appendChild(strip);
  resultEl.appendChild(resultLabel);
  section.appendChild(resultEl);

  blendBtn.addEventListener('click', () => {
    const idxA = parseInt(selectA.value, 10);
    const idxB = parseInt(selectB.value, 10);
    if (isNaN(idxA) || isNaN(idxB)) return;
    const pA = PALETTE_LIBRARY[idxA];
    const pB = PALETTE_LIBRARY[idxB];
    if (!pA || !pB) return;

    
    const maxLen = Math.max(pA.colors.length, pB.colors.length);
    const mixed = [];
    for (let i = 0; i < maxLen; i++) {
      if (pA.colors[i]) mixed.push(pA.colors[i]);
      if (pB.colors[i]) mixed.push(pB.colors[i]);
    }
    
    const seen = new Set();
    const unique = mixed.filter(c => {
      const h = sanitizeHex(c.hex);
      if (!h || seen.has(h)) return false;
      seen.add(h); return true;
    }).slice(0, 10);

    
    strip.replaceChildren();
    const hexList = [];
    unique.forEach((color) => {
      const safeHex = sanitizeHex(color.hex);
      if (!safeHex) return;
      hexList.push(safeHex);

      const sw = document.createElement('div');
      sw.className = 'mixer-result__swatch';
      sw.style.backgroundColor = safeHex; 
      sw.setAttribute('title', color.name + ' — ' + safeHex.toUpperCase());

      const lbl2 = document.createElement('span');
      lbl2.className = 'mixer-result__swatch-label';
      lbl2.textContent = safeHex.toUpperCase();
      sw.appendChild(lbl2);

      sw.addEventListener('click', () => {
        copyTextToClipboard(safeHex);
        showToast('✓ ' + safeHex.toUpperCase() + ' copied!');
      });
      strip.appendChild(sw);
    });

    resultName.textContent = pA.name + ' × ' + pB.name; 
    copyMixBtn.onclick = () => {
      copyTextToClipboard(hexList.join('  '));
      showToast('✓ Blended hex codes copied!');
    };
    resultEl.classList.add('mixer-result--visible');
  });

  return section;
}


function openGalleryModal() {
  galleryModal.hidden = false;
  document.body.style.overflow = 'hidden';
  buildGalleryFilterChips();
  renderGalleryGrid(PALETTE_LIBRARY);
  gallerySearch.value = '';
  gallerySearch.focus();
}

function closeGalleryModal() {
  galleryModal.hidden = true;
  document.body.style.overflow = '';
}

function buildGalleryFilterChips() {
  galleryFilterChips.replaceChildren();

  const toneSet = new Set();
  PALETTE_LIBRARY.forEach(p => (p.tones || []).forEach(t => toneSet.add(t)));

  toneSet.forEach((tone) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'gallery-chip' + (tone === activeGalleryFilter ? ' gallery-chip--active' : '');
    chip.textContent = tone;
    chip.addEventListener('click', () => {
      
      if (activeGalleryFilter === tone) {
        activeGalleryFilter = 'all';
      } else {
        activeGalleryFilter = tone;
      }
      
      galleryFilterChips.querySelectorAll('.gallery-chip').forEach((c, i) => {
        const isActive = [...toneSet][i] === activeGalleryFilter;
        c.classList.toggle('gallery-chip--active', isActive);
      });
      filterGallery();
    });
    galleryFilterChips.appendChild(chip);
  });
}

function onGallerySearch() {
  filterGallery();
}

function filterGallery() {
  const query = (gallerySearch.value || '').toLowerCase().trim();
  let results = PALETTE_LIBRARY;

  if (activeGalleryFilter !== 'all') {
    results = results.filter(p => (p.tones || []).includes(activeGalleryFilter));
  }

  if (query.length > 1) {
    results = results.filter(p => {
      return p.name.toLowerCase().includes(query) ||
             p.moodDesc.toLowerCase().includes(query) ||
             (p.tones || []).some(t => t.toLowerCase().includes(query)) ||
             (p.keywords || []).some(k => k.toLowerCase().includes(query));
    });
      }

  renderGalleryGrid(results);
}

function renderGalleryGrid(palettes) {
  galleryGrid.replaceChildren();
  galleryCount.textContent = palettes.length + ' palettes';

  if (palettes.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'gallery-no-results';
    empty.textContent = 'No palettes match your search.';
    galleryGrid.appendChild(empty);
    return;
  }

  palettes.forEach((palette, idx) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Load palette: ' + palette.name);
    card.style.animationDelay = (idx * 0.04) + 's';

    
    const strip2 = document.createElement('div');
    strip2.className = 'gallery-card__strip';
    palette.colors.forEach((color) => {
      const safeHex = sanitizeHex(color.hex);
      if (!safeHex) return;
      const sw = document.createElement('div');
      sw.className = 'gallery-card__swatch';
      sw.style.backgroundColor = safeHex; 
      strip2.appendChild(sw);
    });
    card.appendChild(strip2);

    
    const info = document.createElement('div');
    info.className = 'gallery-card__info';

    const name = document.createElement('div');
    name.className = 'gallery-card__name';
    name.textContent = palette.name; 
    info.appendChild(name);

    const tones = document.createElement('div');
    tones.className = 'gallery-card__tones';
    (palette.tones || []).slice(0, 3).forEach((tone) => {
      const t = document.createElement('span');
      t.className = 'gallery-card__tone';
      t.textContent = tone; 
      tones.appendChild(t);
    });
    info.appendChild(tones);
    card.appendChild(info);

    const clickHandler = () => {
      closeGalleryModal();
      showPalette(palette, palette.keywords[0] || palette.name);
    };
    card.addEventListener('click', clickHandler);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); clickHandler(); }
    });

    galleryGrid.appendChild(card);
  });
}


function toggleAmbientMode() {
  ambientActive = !ambientActive;
  ambientBtn.classList.toggle('ambient-btn--active', ambientActive);
  ambientBtn.setAttribute('aria-pressed', String(ambientActive));

  if (ambientActive) {
    showToast('✦ Ambient mode on — background adapts to your palette');
    if (lastPalette) applyAmbientColors(lastPalette);
    } else {
    
    const orb1 = document.querySelector('.bg-orb--1');
    const orb2 = document.querySelector('.bg-orb--2');
    const orb3 = document.querySelector('.bg-orb--3');
    if (orb1) { orb1.style.background = ''; orb1.style.opacity = '0.6'; }
    if (orb2) { orb2.style.background = ''; orb2.style.opacity = '0.6'; }
    if (orb3) { orb3.style.background = ''; orb3.style.opacity = '0.6'; }
    
    
    document.body.style.removeProperty('--ambient-bg');
    document.body.style.removeProperty('--ambient-opacity');
    document.body.style.removeProperty('--ambient-border');
    document.body.style.removeProperty('--ambient-glow');

    const card = document.querySelector('.palette-card');
    if (card) card.classList.remove('ambient-breathing');

    showToast('◉ Ambient mode off');
  }
  }

function applyAmbientColors(palette) {
  const hexes = palette.colors.map(c => sanitizeHex(c.hex)).filter(Boolean);
  if (hexes.length < 2) return;

  const orb1 = document.querySelector('.bg-orb--1');
  const orb2 = document.querySelector('.bg-orb--2');
  const orb3 = document.querySelector('.bg-orb--3');

  
  const primary = hexes[1] || hexes[0];
  const accent  = hexes[2] || hexes[1];
  const shadow  = hexes[hexes.length - 1] || hexes[0];

  if (orb1) { orb1.style.background = 'radial-gradient(circle, ' + primary + '99, ' + primary + '00)'; orb1.style.opacity = '0.9'; }
  if (orb2) { orb2.style.background = 'radial-gradient(circle, ' + accent  + '77, ' + accent  + '00)'; orb2.style.opacity = '0.85'; }
  if (orb3) { orb3.style.background = 'radial-gradient(circle, ' + shadow  + '66, ' + shadow  + '00)'; orb3.style.opacity = '0.8'; }

  
  document.body.style.setProperty('--ambient-bg', 'linear-gradient(135deg, ' + hexes.join(', ') + ')'); 
  document.body.style.setProperty('--ambient-opacity', '0.25'); 
  document.body.style.setProperty('--ambient-border', primary + '40'); 
  document.body.style.setProperty('--ambient-glow', primary + '33'); 

  const card = document.querySelector('.palette-card');
  if (card) card.classList.add('ambient-breathing');
}


function openColorStory(palette) {
  if (!palette || !palette.colors || !palette.colors.length) return;
  storyPalette = palette;
  storyIndex = 0;
  storyAutoPlay = true;
  storyAuto.classList.add('active');

  
  storyDots.innerHTML = '';
  palette.colors.forEach((c, idx) => {
    const dot = document.createElement('div');
    dot.className = 'story-dot';
    dot.addEventListener('click', () => {
      storyAutoPlay = false;
      renderStorySlide(idx);
    });
    storyDots.appendChild(dot);
  });

  storyModal.removeAttribute('hidden');
  renderStorySlide(0);
}

function closeColorStory() {
  storyModal.setAttribute('hidden', '');
  clearTimeout(storyTimer);
  storyPalette = null;
}

function renderStorySlide(index) {
  if (!storyPalette) return;
  storyIndex = index;
  const color = storyPalette.colors[index];
  if (!color) return;

  const hex = sanitizeHex(color.hex);
  if (!hex) return;

  storyBg.style.background = hex;

  storyHex.textContent = hex;
  storyName.textContent = color.name;
  storyRole.textContent = color.role;
  storyPsych.textContent = color.psychology;

  Array.from(storyDots.children).forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });

  
    storyProgress.style.transition = 'none';
  storyProgress.style.width = '0%';
  
  clearTimeout(storyTimer);
  if (storyAutoPlay) {
    
    void storyProgress.offsetWidth;
    storyProgress.style.transition = 'width 3.5s linear';
    storyProgress.style.width = '100%';
    
    storyTimer = setTimeout(() => {
      nextStorySlide();
    }, 3500);
  }
}

function nextStorySlide() {
  if (!storyPalette) return;
  let next = storyIndex + 1;
  if (next >= storyPalette.colors.length) {
     if (storyAutoPlay) closeColorStory();
    else next = storyPalette.colors.length - 1;
  }
  if (next < storyPalette.colors.length) renderStorySlide(next);
}

function prevStorySlide() {
  if (!storyPalette) return;
  let prev = storyIndex - 1;
  if (prev < 0) prev = 0;
  renderStorySlide(prev);
}


function copyShareLink(palette) {
  const slug = encodeURIComponent(palette.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
  updateHash(slug);
  const url = window.location.href;
  copyTextToClipboard(url);
  showToast('🔗 Link copied to clipboard!');
  }

function exportShareCard(palette) {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext('2d');

  const hexes = palette.colors.map(c => sanitizeHex(c.hex)).filter(Boolean);
  if (!hexes.length) return;

  
  ctx.fillStyle = '#0f0f16';
  ctx.fillRect(0, 0, 1200, 630);

  
  const grad = ctx.createLinearGradient(0, 0, 1200, 630);
  grad.addColorStop(0, hexes[0] + '33');
  grad.addColorStop(0.5, hexes[Math.floor(hexes.length/2)] + '11');
  grad.addColorStop(1, hexes[hexes.length-1] + '44');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1200, 630);

  
  ctx.strokeStyle = 'rgba(255,255,255,0.03)';
  ctx.lineWidth = 1;
  for(let i=0; i<1200; i+=40) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 630); ctx.stroke(); }
  for(let i=0; i<630; i+=40) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(1200, i); ctx.stroke(); }

  
  ctx.fillStyle = '#ffffff';
  ctx.font = 'italic 72px "DM Serif Display", Georgia, serif';
  ctx.fillText(palette.name, 100, 160);

  
  function wrapText(context, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let currentY = y;
    for(let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = context.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, currentY);
  }

  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = '300 28px "Outfit", sans-serif';
  wrapText(ctx, palette.mood_description, 100, 220, 1000, 38);

  
  const stripWidth = 1000;
  const stripHeight = 120;
  const startY = 360;
  const swatchW = stripWidth / hexes.length;

  
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(100, startY, stripWidth, stripHeight, 20);
  ctx.clip();
  hexes.forEach((hex, i) => {
    ctx.fillStyle = hex;
    ctx.fillRect(100 + (i * swatchW), startY, Math.ceil(swatchW), stripHeight);
  });
  ctx.restore();

  
  ctx.font = '600 18px "Space Grotesk", monospace';
  ctx.textAlign = 'center';
  hexes.forEach((hex, i) => {
        
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    ctx.fillStyle = luma > 140 ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.8)';
    
    ctx.fillText(hex.toUpperCase(), 100 + (i * swatchW) + (swatchW/2), startY + stripHeight - 20);
  });

  
  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.font = '600 20px "Outfit", sans-serif';
  ctx.fillText('✦ Sun Studios', 100, 560);

  
  try {
    const dataUrl = canvas.toDataURL('image/png');