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
