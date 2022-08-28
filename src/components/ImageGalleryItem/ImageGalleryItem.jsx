export const ImagesGalleryItem = ({
  webformatURL,
  largeImageURL,
  toggleModal,
}) => {
  return (
    <li className="gallery-item">
      <img
        src={webformatURL}
        alt={largeImageURL}
        onClick={() => toggleModal(largeImageURL)}
      />
    </li>
  );
};
