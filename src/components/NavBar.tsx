import { styled } from "styled-components";
import githubIcon from "../assets/img/github.png";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Container = styled.header`
  z-index: 1;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  height: 4rem;
  width: 100%;
  padding: 0 24px;
  border-bottom: 0.5px solid black;
`;

const NavContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

// const BlogTitle = styled.h2`
//   font-weight: 600;
// `;

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

const NavBar = () => {
  const navigate = useNavigate();
  const handleContactIconClick = () => {
    window.open("https://github.com/koh1260", "_blank");
  };

  return (
    <Container>
      <NavContent>
        <Logo />
        <ContactIconBlock>
          <WriteButton onClick={() => navigate('/write')}>새 글 작성</WriteButton>
          <Icon src={githubIcon} onClick={handleContactIconClick} />
        </ContactIconBlock>
      </NavContent>
    </Container>
  );
};

export default NavBar;
