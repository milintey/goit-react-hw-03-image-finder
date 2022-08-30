import { ImageGalleryUl } from './ImageGallery.styled';

import { ImagesGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ImageGalleryUl className="gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImagesGalleryItem
            key={id}
            toggleModal={toggleModal}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ImageGalleryUl>
  );
};
