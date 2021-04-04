import { standImage } from './elements.js';

const changeImage = (selector, url) => {
    const el = document.querySelector(selector);
    el.src = url
}

const changeSelectedItem = (selectedItemIndex) => {
    const selectedClassName = '__selected';
    document.querySelectorAll('.preview-item').forEach((element, index) => {
        const isSelected = element.classList.contains(selectedClassName);
        const isNewSelectedItem = index === selectedItemIndex;
        if (isSelected && isNewSelectedItem) {
            return;
        } else if (isSelected) {
            element.classList.remove(selectedClassName);
        } else if (isNewSelectedItem) {
            element.classList.add(selectedClassName);
        }
    });
}

export const createPreviewItems = (containerElement, items) => {
    containerElement.innerHTML = '';

    items.forEach(({ imageUrl, description, previewImageUrl, interierImageUrl }, index) => {
        const { content } = document.querySelector('#preview-item-tmpl');
        const imageEl = content.querySelector('.preview-image');
        const descrEl = content.querySelector('.preview-description');

        imageEl.src = imageUrl;
        descrEl.innerText = description;

        const el = document.importNode(content, true);

        const itemEl = el.querySelector('.preview-item');
        itemEl.addEventListener('click', () => {
            changeSelectedItem(index);
            changeImage('.stand-image', previewImageUrl);
            changeImage('.interier-image', interierImageUrl);
        });

        containerElement.appendChild(el);
    });

    standImage.src = items[0].previewImageUrl;
    document.querySelector('.preview-item').classList.add('__selected');
};