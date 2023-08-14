import React from 'react';
import { styled } from 'styled-components';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Input = styled.input`
  height: fit-content;
  width: 100%;
  padding: 10px;
  border: 1px solid lightgray;
  outline: none;
`;

const LoginButton = styled.button`
  margin-top: 10px;
  padding: 0.4rem 1rem;
  color: white;
  background-color: #529FDC;
  border: none;
  font-size: 1.2rem;
  font-weight: 500;
  width: fit-content;
`;

const LoginForm = () => 
  <Container>
    <Input placeholder='아이디를 입력하세요.' />
    <Input placeholder='비밀번호를 입력하세요.' type='password' />
    <LoginButton>로그인</LoginButton>
  </Container>;
export default LoginForm;
