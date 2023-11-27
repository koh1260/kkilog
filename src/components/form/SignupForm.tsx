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

interface SignupInfo {
  email: string;
  nickname: string;
  password: string;
}

const SignupForm = () => {
  const [payload, setPayload] = useState<SignupInfo>({
    email: '',
    nickname: '',
    password: ''
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value
    });
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.signup(payload);
      if (response.ok) {
        alert('가입 완료');
        return;
      }

      const er: ErrorResponse = await response.json();
      alert(er.message);
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
      <StyledButton>회원가입</StyledButton>
    </Container>
  );
};

export default SignupForm;
