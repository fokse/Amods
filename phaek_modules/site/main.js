import { createPreviewItems } from './modules/create-preview-items.js';
import { initKolonkiSwitcher } from './modules/kolonki-switcher.js';
import { BLACK_STANDS } from './modules/constants.js';
import { previewList } from './modules/elements.js';

initKolonkiSwitcher();
createPreviewItems(previewList, BLACK_STANDS);
