import { ImageGalleryItemImage } from './ImageGalleryItem.styled';

export const ImagesGalleryItem = ({
  webformatURL,
  largeImageURL,
  toggleModal,
}) => {
  return (
    <li>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={largeImageURL}
        onClick={() => toggleModal(largeImageURL)}
      />
    </li>
  );
};
