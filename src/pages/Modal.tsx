import React from 'react';
import { styled } from 'styled-components';

interface ModalProps {
  children: JSX.Element,
}

const Background = styled.div`
  position: absolute;
  width: 100lvw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 660px;
  min-width: 350px;
  width: 50%;
  height: 50%;
  background-color: white;
  border-radius: 12px;
`;

const Modal = ({children}: ModalProps) => (
    <Background>
      <Container>
        {children}
      </Container>
    </Background>
  );

export default Modal;
