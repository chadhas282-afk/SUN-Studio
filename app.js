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