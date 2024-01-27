import React from 'react';
import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ErrorMessage = styled.h1`
  margin-bottom: 5rem;
`;

const Icon = styled.img`
  width: 20rem;
`;

const ErrorPage = () => {
  const error = useRouteError();
  const message = error instanceof Error ? error.message : '알 수 없는 에러입니다.';

  return (
    <Container>
      <ErrorMessage>{message}</ErrorMessage>
      <Icon src='https://haesungsbucket.s3.ap-northeast-2.amazonaws.com/kkilog/error-elephant.png' />
    </Container>
  );
};

export default ErrorPage;
