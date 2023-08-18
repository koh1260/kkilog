import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import githubIcon from '../assets/img/github.png';
import Logo from './Logo';
import Modal from '../pages/Modal';
import LoginPage from '../pages/LoginPage';

const Container = styled.header`
  z-index: 1;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  height: 4rem;
  width: 100%;
  border-bottom: 0.5px solid lightgray;
`;

const NavContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  /* 
  @media screen and (max-width: 768px) {
    justify-content: start;
  } */
`;

const ContactIconBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 12px;
  cursor: pointer;
`;

const WriteButton = styled.button`
  background-color: powderblue;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  height: 32px;
  padding: 4px 10px;
  height: fit-content;
  width: fit-content;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LoginButton = styled.button`
  background-color: powderblue;
  color: white;
  border: none;
  padding: 4px 10px;
  font-size: 1rem;
  font-weight: 600;
  height: fit-content;
  width: fit-content;
`;

const NavBar = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const navigate = useNavigate();
  const handleContactIconClick = () => {
    window.open('https://github.com/koh1260', '_blank');
  };

  return (
    <Container>
      {loginModalVisible && (
        <Modal setModalVisible={setLoginModalVisible}>
          <LoginPage />
        </Modal>
      )}
      <NavContent>
        <Logo />
        <ContactIconBlock>
          <LoginButton
            onClick={() => {
              setLoginModalVisible(true);
              document.body.classList.add('open-modal');
            }}
          >
            로그인
          </LoginButton>
          <WriteButton onClick={() => navigate('/write')}>
            새 글 작성
          </WriteButton>
          <Icon src={githubIcon} onClick={handleContactIconClick} />
        </ContactIconBlock>
      </NavContent>
    </Container>
  );
};

export default NavBar;
