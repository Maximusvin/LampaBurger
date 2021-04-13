import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modal } from './ModalItem.style';

const modalRoot = document.querySelector('#modal-root');

class ModalItem extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal(null);
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal(null);
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Modal>{this.props.children}</Modal>
      </Overlay>,
      modalRoot,
    );
  }
}

export default ModalItem;
