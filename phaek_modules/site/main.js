import { createPreviewItems } from './modules/create-preview-items.js';
import { initKolonkiSwitcher } from 'https://raw.githubusercontent.com/fokse/Amods/main/phaek_modules/site/modules/kolonki-switcher.js';
import { BLACK_STANDS } from './modules/constants.js';
import { previewList } from './modules/elements.js';

initKolonkiSwitcher();
createPreviewItems(previewList, BLACK_STANDS);
