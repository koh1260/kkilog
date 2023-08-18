import React from 'react';
import { styled } from 'styled-components';

interface ModalProps {
  children: JSX.Element;
  setModalVisible(visible: boolean): void;
}

const Background = styled.div`
  position: absolute;
  width: 100lvw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  box-shadow: 0px 0px 10px 0px lightgray;
  position: relative;
  width: 900px;
  height: 500px;
  background-color: white;

  @media screen and (max-width: 1024px) {
    width: 450px;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

const CloseButton = styled.button`
  font-weight: 600;
  top: 5px;
  right: 5px;
  position: absolute;
  background-color: transparent;
  border: none;
`;

const Modal = ({ children, setModalVisible }: ModalProps) => (
  <Background>
    <Container>
    <CloseButton onClick={() => {
      setModalVisible(false)
      document.body.classList.remove('open-modal');
    }}>x</CloseButton>
      {children}
    </Container>
  </Background>
);

export default Modal;