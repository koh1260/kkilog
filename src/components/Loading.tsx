import React from 'react';
import { styled } from 'styled-components';
import spinner from '../assets/img/loading.gif';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.img`
  
`;

const Loading = () => (
    <Container>
      <Spinner src={spinner} />
    </Container>
);

export default Loading;