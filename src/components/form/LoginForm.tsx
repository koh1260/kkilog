import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../api/api';
import { useAppDispatch } from '../../redux/hook';
import { UserState, setUser } from '../../redux/slice/user-slice';
import storage from '../../lib/storage';
import ClientExcepction from '../../common/exceptions/client-exception';
import { User } from '../../type';
import StyledInput from '../common/StyledInput';
import StyledButton from '../common/StyledButton';
import { closeLoginModal } from '../../redux/slice/login-modal-slice';

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

interface ILoginInfo {
  username: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
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
      if (response.ok) {
        const data = await response.json();
        const user: User = data.result;
        const loginedUser: UserState = {
          id: user.id,
          username: user.email,
          role: user.role,
          logined: true,
        };

        dispatch(setUser(loginedUser));
        storage.set('user', loginedUser);
        dispatch(closeLoginModal())
        document.body.classList.remove('open-modal');
        navigate('/');
      } else {
        toast.error('이메일과 비밀번호를 확인해주세요!');
      }
    } catch (e: any) {
      if (e instanceof ClientExcepction) console.error(e.stack);
      if (e instanceof Error) console.error(e.stack);
    }
  };

  return (
    <Container onSubmit={handleOnSubmit}>
      <StyledInput
        name='username'
        placeholder='아이디를 입력하세요.'
        value={loginInfo.username}
        onChange={handleOnChange}
      />
      <StyledInput
        name='password'
        placeholder='비밀번호를 입력하세요.'
        type='password'
        value={loginInfo.password}
        onChange={handleOnChange}
      />
      <LoginButtonBlock>
        <StyledButton>로그인</StyledButton>
      </LoginButtonBlock>
    </Container>
  );
};
export default LoginForm;
