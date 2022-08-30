import { Component } from 'react';
import { OverlayModal, ModalDiv } from '../Modal/Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <OverlayModal onClick={() => this.props.toggleModal()}>
        <ModalDiv>
          <img src={this.props.image} alt="" />
        </ModalDiv>
      </OverlayModal>
    );
  }
}
