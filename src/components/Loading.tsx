import React from 'react';
import { styled } from 'styled-components';

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
      <Spinner src='https://haesungsbucket.s3.ap-northeast-2.amazonaws.com/kkilog/loading.gif' />
    </Container>
);

export default Loading;