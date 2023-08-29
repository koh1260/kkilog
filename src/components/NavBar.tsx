import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import githubIcon from '../assets/img/github.png';
import Logo from './Logo';
import Modal from '../pages/Modal';
import LoginPage from '../pages/LoginPage';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setIsVisible } from '../redux/slice/category-slice';

const Container = styled.header`
  z-index: 1;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  height: 4rem;
  width: 100%;
  /* border-bottom: 0.5px solid lightgray; */
  border-bottom: 0.5px solid lightgray;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.03);
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

const OpenCategoryButton = styled.button`
  display: none;
  align-items: center;
  height: 100%;
  background-color: transparent;
  border: none;

  @media screen and (max-width: 1285px){
    display: flex;
  }
`;

const HambergerIcon = styled.img`
  height: 32px;
`;

const WriteButton = styled.button`
  background-color: powderblue;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  height: 32px;
  padding: 4px 10px;
  height: 32px;
  width: fit-content;
  border-radius: 12px;

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
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [loginModalVisible, setLoginModalVisible] = useState(false);
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
          {user.logined || (
            <LoginButton
              onClick={() => {
                setLoginModalVisible(true);
                document.body.classList.add('open-modal');
              }}
            >
              로그인
            </LoginButton>
          )}
          <OpenCategoryButton
            onMouseEnter={() => dispatch(setIsVisible({ isVisible: true }))}
            onMouseLeave={() => dispatch(setIsVisible({ isVisible: false }))}
          >
            <HambergerIcon src='https://cdn-icons-png.flaticon.com/128/4074/4074170.png' />
          </OpenCategoryButton>
          <Icon src='https://cdn-icons-png.flaticon.com/128/1051/1051377.png' onClick={handleContactIconClick} />
          {user.logined && user.role === 'ADMIN' && (
            <WriteButton onClick={() => navigate('/blog/write')}>
              새 글 작성
            </WriteButton>
          )}
        </ContactIconBlock>
      </NavContent>
    </Container>
  );
};

export default NavBar;
