import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Modal from '../pages/Modal';
import LoginPage from '../pages/LoginPage';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setIsVisible } from '../redux/slice/category-slice';
import ClientExcepction from '../common/exceptions/client-exception';
import api from '../api/api';
import { setUser } from '../redux/slice/user-slice';
import storage from '../lib/storage';
import { setIsVisibleLoginModal } from '../redux/slice/modal-slice';

const Container = styled.header`
  z-index: 1;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  height: 4rem;
  width: 100%;
  border-bottom: 0.5px solid lightgray;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.03);
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

const OpenCategoryButton = styled.button`
  display: none;
  align-items: center;
  height: 100%;
  background-color: transparent;
  border: none;

  @media screen and (max-width: 1285px) {
    display: flex;
  }
`;

const HambergerIcon = styled.img`
  height: 32px;
`;

const WriteButton = styled.button`
  background-color: #84aaff;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  height: 32px;
  padding: 4px 10px;
  height: 32px;
  width: fit-content;
  border-radius: 7px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LoginButton = styled.button`
  background-color: #84aaff;
  color: white;
  border: none;
  padding: 4px 10px;
  font-size: 1rem;
  font-weight: 600;
  height: fit-content;
  width: fit-content;
  border-radius: 7px;
`;

const NavBar = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const isVisibleLoginModal = useAppSelector((state) => state.modal.isVisibleLoginModal);

  const handleContactIconClick = () => {
    window.open('https://github.com/koh1260', '_blank');
  };

  const handleLoginModalVisible = () => {
    dispatch(setIsVisibleLoginModal({isVisibleLoginModal: false}));
    document.body.classList.remove('open-modal');
  }

  const handleOnClickLogout = async () => {
    try {
      await api.logout();
      dispatch(setUser({
        id: null,
        role: null,
        username: null,
        logined: false,
      }));
      storage.remove('access_token');
      storage.remove('user');
      navigate('/');
    } catch (e) {
      if (e instanceof ClientExcepction) {
        console.error(`Client Error: ${e.stack}`);
      }
      else if (e instanceof Error) {
        console.error(`Error: ${e.stack}`);
      }
    }
  };

  return (
    <Container>
      {isVisibleLoginModal && (
        <Modal handleVisible={handleLoginModalVisible}>
          <LoginPage />
        </Modal>
      )}
      <NavContent>
        <Logo />
        <ContactIconBlock>
          {user.logined ? (
            <LoginButton onClick={handleOnClickLogout}>로그아웃</LoginButton>
          ) : (
            <LoginButton
              onClick={() => {
                dispatch(setIsVisibleLoginModal({isVisibleLoginModal: true}))
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
          <Icon
            src='https://cdn-icons-png.flaticon.com/128/1051/1051377.png'
            onClick={handleContactIconClick}
          />
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
