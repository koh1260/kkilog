import React, { useState } from 'react';
import { styled } from 'styled-components';
import LoginForm from '../components/form/LoginForm';
import SignupForm from '../components/form/SignupForm';

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

const ImageBlock = styled.section`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const VannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LoginBloack = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: 2rem 5rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

const TopBlock = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    padding: 2rem;
    justify-content: center;
    padding: 1rem 0;
  }
`;

const Logo = styled.img`
  width: 40%;
  min-width: 12rem;
`;

const SignBlock = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const MemberCheckText = styled.span`
  font-size: 0.8rem;
  color: lightgray;
`;

const NavigationButton = styled.div`
  color: #529fdc;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  background-color: transparent;
  border: none;
`;

// const BottomBlock = styled.div``;

const LoginPage = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  return (
    <Container>
      <ImageBlock>
        <VannerImage src='https://haesungsbucket.s3.ap-northeast-2.amazonaws.com/kkilog/login-vanner.png' />
      </ImageBlock>
      <LoginBloack>
        <TopBlock>
          <Logo src='https://haesungsbucket.s3.ap-northeast-2.amazonaws.com/kkilog/logo.png' />
        </TopBlock>
        {isLoginPage ? <LoginForm /> : <SignupForm />}
        {/* <BottomBlock>a</BottomBlock> */}
        {isLoginPage ? (
          <SignBlock>
            <MemberCheckText>회원이 아니신가요?</MemberCheckText>
            <NavigationButton onClick={() => setIsLoginPage(false)}>
              회원가입
            </NavigationButton>
          </SignBlock>
        ) : (
          <SignBlock>
            <MemberCheckText>계정이 있으신가요?</MemberCheckText>
            <NavigationButton onClick={() => setIsLoginPage(true)}>
              로그인
            </NavigationButton>
          </SignBlock>
        )}
      </LoginBloack>
    </Container>
  );
};

export default LoginPage;
