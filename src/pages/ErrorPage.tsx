import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const ErrorMessage = styled.h1``;

const Icon = styled.img`
  width: 20rem;
`;

const ErrorPage = () => (
    <Container>
      <ErrorMessage>ERROR</ErrorMessage>
      <Icon src='https://haesungsbucket.s3.ap-northeast-2.amazonaws.com/kkilog/error-elephant.png' />
    </Container>
  );

export default ErrorPage;