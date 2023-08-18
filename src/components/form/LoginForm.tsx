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
  margin-top: 10px;
  padding: 0.4rem 1rem;
  color: white;
  background-color: #529fdc;
  border: none;
  font-size: 1.2rem;
  font-weight: 500;
  width: fit-content;
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
      const response = (await api.login(loginInfo));
      const token = response.headers.authorization;
      const user = response.data.result;
      const loginedUser: UserState = {
        id: user.id,
        username: user.email,
        role: user.role,
      };
      dispatch(setUser(loginedUser));
      storage.set('access_token', token);
      storage.set('user', loginedUser);
    } catch (e: any) {
      alert(e.stack);
      if(e instanceof Error) console.log(e.stack);
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
      <LoginButton>로그인</LoginButton>
    </Container>
  );
};
export default LoginForm;