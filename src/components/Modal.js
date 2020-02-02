import React, { Component } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

class Modal extends Component {
  componentDidMount() {
    const { closeModalOnESC } = this.props;
    window.addEventListener('keydown', closeModalOnESC);
  }

  componentWillUnmount() {
    const { closeModalOnESC } = this.props;
    window.removeEventListener('keydown', closeModalOnESC);
  }

  render() {
    const { image, closeModal } = this.props;
    return (
      <Overlay onClick={closeModal}>
        <ModalWindow>
          <img src={image} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}

export default Modal;
