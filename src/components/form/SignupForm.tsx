import React, { useState } from 'react';
import styled from 'styled-components';
import StyledInput from '../common/StyledInput';
import StyledButton from '../common/StyledButton';
import api from '../../api/api';
import { ErrorResponse } from '../../type';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (max-width: 768px) {
    padding: 2rem;
    align-items: center;
  }
`;

const ErrorMessage = styled.div`
  min-width: 18rem;
  color: red;
  font-size: 0.8rem;
  font-weight: 600;
`;

interface SignupInfo {
  email: string;
  nickname: string;
  password: string;
}

const SignupForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [payload, setPayload] = useState<SignupInfo>({
    email: '',
    nickname: '',
    password: ''
  });

  const checkBlank = () =>
    payload.email && payload.nickname && payload.password;

  const checkEmail = () => {
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return reg.test(payload.email);
  };

  const checkNickname = () => payload.nickname.length < 16;

  const checkPassword = () => {
    const reg = /^[A-Za-z\d!@#$%^&*()]{8,30}$/;
    return reg.test(payload.password);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value
    });
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkBlank()) {
      setErrorMessage('입력란을 모두 입력해주세요.');
      return;
    }
    if (!checkEmail()) {
      setErrorMessage('이메일 형식이 일치하지 않습니다.');
      return;
    }
    if (!checkNickname()) {
      setErrorMessage('닉네임은 최대 15자입니다.');
      return;
    }
    if (!checkPassword()) {
      setErrorMessage('비밀번호는 8~30자이며 특수문자를 포함할 수 있습니다.');
      return;
    }

    try {
      const response = await api.signup(payload);
      if (response.ok) {
        alert('가입 완료');
        return;
      }

      const errorObj: ErrorResponse = await response.json();
      setErrorMessage(errorObj.message);
    } catch (error) {
      if (error instanceof Error) console.error(error.stack);
    }
  };

  return (
    <Container onSubmit={handleOnSubmit}>
      <StyledInput
        name='email'
        placeholder='이메일을 입력하세요.'
        value={payload.email}
        onChange={handleOnChange}
      />
      <StyledInput
        name='nickname'
        placeholder='닉네임을 입력하세요.'
        value={payload.nickname}
        onChange={handleOnChange}
      />
      <StyledInput
        name='password'
        type='password'
        placeholder='비밀번호를 입력하세요.'
        value={payload.password}
        onChange={handleOnChange}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <StyledButton>회원가입</StyledButton>
    </Container>
  );
};

export default SignupForm;
