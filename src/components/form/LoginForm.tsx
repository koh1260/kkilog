import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { toast } from 'react-toastify';
import StyledInput from '../common/StyledInput';
import StyledButton from '../common/StyledButton';
import { LoginData } from '../../type/request';
import useLogin from '../../hooks/useLogin';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (max-width: 768px) {
    padding: 2rem;
    align-items: center;
  }
`;

const LoginButtonBlock = styled.div`
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const LoginForm = () => {
  
  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: ''
  });

  const { mutate, isError } = useLogin(loginData);

  useEffect(() => {
    if (isError) toast.error('이메일과 비밀번호를 확인해주세요!');
  }, [isError])

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(loginData);
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  return (
    <Container onSubmit={handleOnSubmit}>
      <StyledInput
        name='username'
        placeholder='아이디를 입력하세요.'
        value={loginData.username}
        onChange={handleOnChange}
      />
      <StyledInput
        name='password'
        placeholder='비밀번호를 입력하세요.'
        type='password'
        value={loginData.password}
        onChange={handleOnChange}
      />
      <LoginButtonBlock>
        <StyledButton>로그인</StyledButton>
      </LoginButtonBlock>
    </Container>
  );
};
export default LoginForm;
