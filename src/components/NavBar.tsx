import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import githubIcon from '../assets/img/github.png';
import Logo from './Logo';
import Modal from '../pages/Modal';

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
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  height: 32px;
  padding: 4px 10px;
  border-radius: 12px;
`;

const LoginButton = styled.button`
  width: 10rem;
  height: 2rem;
`;

const NavBar = () => {
  const navigate = useNavigate();
  const handleContactIconClick = () => {
    window.open('https://github.com/koh1260', '_blank');
  };

  return (
    <Container>
      <Modal>
        <p>asd</p>
      </Modal>
      <NavContent>
        <Logo />
        <ContactIconBlock>
          <LoginButton>로그인</LoginButton>
          <WriteButton onClick={() => navigate('/write')}>새 글 작성</WriteButton>
          <Icon src={githubIcon} onClick={handleContactIconClick} />
        </ContactIconBlock>
      </NavContent>
    </Container>
  );
}

export default NavBar;
