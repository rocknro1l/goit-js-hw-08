import SimpleLightbox from 'simplelightbox';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const galleryPictures = galleryItems
  .map(({ preview, description, original }) => {
    return `<a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryPictures);

gallery.addEventListener('click', OnGalleryContainerClick);

function OnGalleryContainerClick(event) {
  event.preventDefault();
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'botton',
});
