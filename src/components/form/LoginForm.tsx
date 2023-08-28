import React, { useState } from 'react';
import { styled } from 'styled-components';
import api from '../../api/api';
import { useAppDispatch } from '../../redux/hook';
import { UserState, setUser } from '../../redux/slice/user-slice';
import storage from '../../lib/storage';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (max-width: 768px) {
    padding: 2rem;
    align-items: center;
  }
`;

const Input = styled.input`
  height: fit-content;
  min-width: 18rem;
  padding: 10px;
  border: 1px solid lightgray;
  outline: none;
`;

const LoginButton = styled.button`
  height: 2.5rem;
  padding: 0.4rem 1rem;
  color: white;
  background-color: #529fdc;
  border: none;
  font-size: 1.2rem;
  font-weight: 500;
  width: fit-content;
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

const SocialLoginButtonBlock = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLoginButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  border: none;
  overflow: hidden;
  padding: 0;
  background-color: white;
`;

const SocialLoginIcon = styled.img`
  height: 2.5rem;
  width: 2.5rem;
`;

interface ILoginInfo {
  username: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({
    username: '',
    password: ''
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value
    });
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await api.login(loginInfo);
      const token = response.headers.authorization;
      const user = response.data.result;
      const loginedUser: UserState = {
        id: user.id,
        username: user.email,
        role: user.role
      };
      dispatch(setUser(loginedUser));
      storage.set('access_token', token);
      storage.set('user', loginedUser);
    } catch (e: any) {
      alert(e.stack);
      if (e instanceof Error) console.log(e.stack);
    }
  };

  return (
    <Container onSubmit={handleOnSubmit}>
      <Input
        name='username'
        placeholder='아이디를 입력하세요.'
        value={loginInfo.username}
        onChange={handleOnChange}
      />
      <Input
        name='password'
        placeholder='비밀번호를 입력하세요.'
        type='password'
        value={loginInfo.password}
        onChange={handleOnChange}
      />
      <LoginButtonBlock>
        <LoginButton>로그인</LoginButton>
        <SocialLoginButtonBlock>
          <SocialLoginButton>
            <SocialLoginIcon src='https://cdn-icons-png.flaticon.com/512/2504/2504739.png' />
          </SocialLoginButton>
          <SocialLoginButton>
            <SocialLoginIcon src='https://cdn-icons-png.flaticon.com/512/3669/3669973.png' />
          </SocialLoginButton>
        </SocialLoginButtonBlock>
      </LoginButtonBlock>
    </Container>
  );
};
export default LoginForm;
