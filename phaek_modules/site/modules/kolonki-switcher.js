import { BLACK_STANDS, WHITE_STANDS } from 'https://raw.githubusercontent.com/fokse/Amods/main/phaek_modules/site/modules/constants.js';
import { createPreviewItems } from 'https://raw.githubusercontent.com/fokse/Amods/main/phaek_modules/site/modules/create-preview-items.js';
import { kolonkiImage, colorToggleButton, previewList, interierImage } from 'https://raw.githubusercontent.com/fokse/Amods/main/phaek_modules/site/modules/elements.js'

const kolonkiImageSwitcher = {
    allImages: [
        {
            src: 'https://github.com/fokse/Amods/blob/main/phaek_modules/site/assets/images/kolonki/black.png?raw=true',
            text: 'Чёрных',
        },
        {
            src: '../assets/images/kolonki/white.png',
            text: 'Белых',
        },
    ],
    currentImageIndex: 0,
};

const switchImage = () => {
    const { allImages, currentImageIndex } = kolonkiImageSwitcher;
    const { length } = allImages;

    const nextImageIndex = currentImageIndex < length - 1
        ? (currentImageIndex + 1)
        : 0;

    kolonkiImageSwitcher.currentImageIndex = nextImageIndex;

    const { src, text } = allImages[nextImageIndex];

    kolonkiImage.src = src;
    colorToggleButton.innerText = text;
};

const switchStandVariants = () => {
    const items = kolonkiImageSwitcher.currentImageIndex === 0 ? BLACK_STANDS : WHITE_STANDS;
    createPreviewItems(previewList, items);;
    interierImage.src = items[0].interierImageUrl;
};

export const initKolonkiSwitcher = () => {
    colorToggleButton.addEventListener('click', () => {
        switchImage();
        switchStandVariants();
    });

    const { src, text } = kolonkiImageSwitcher.allImages[kolonkiImageSwitcher.currentImageIndex];
    kolonkiImage.src = src;
    colorToggleButton.innerText = text;

    const currentList = kolonkiImageSwitcher.currentImageIndex === 0 ? BLACK_STANDS : WHITE_STANDS;
    interierImage.src = currentList[0].interierImageUrl;
};
