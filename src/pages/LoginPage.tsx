import React from 'react';
import { styled } from 'styled-components';
import LoginForm from '../components/form/LoginForm';
import vanner from '../assets/img/login-vanner.png';

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
  width: 50%;
  height: 100%;
  padding: 5rem;

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

// const BottomBlock = styled.div``;

const LoginPage = () => (
  <Container>
    <ImageBlock>
      <VannerImage src={vanner}/>
    </ImageBlock>
    <LoginBloack>
      <TopBlock>
        <Logo src='http://localhost:3000/static/media/logo.b06a1d68547714d8cb3a.png' />
      </TopBlock>
      <LoginForm />
      {/* <BottomBlock>a</BottomBlock> */}
    </LoginBloack>
  </Container>
);

export default LoginPage;
