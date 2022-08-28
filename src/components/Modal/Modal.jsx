import { OverlayModal, ModalDiv } from '../Modal/Modal.styled';

export const Modal = ({ image, toggleModal }) => {
  return (
    <OverlayModal onClick={() => toggleModal()}>
      <ModalDiv>
        <img src={image} alt="" />
      </ModalDiv>
    </OverlayModal>
  );
};
