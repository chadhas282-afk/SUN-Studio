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