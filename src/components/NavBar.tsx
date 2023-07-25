import { styled } from "styled-components";
import githubIcon from "../assets/img/github.png";

const Container = styled.header`
  display: flex;
  padding: 0 24px;
  border-bottom: 0.5px solid black;
`;

const NavContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BlogTitle = styled.h2`
  font-weight: 500;
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

const NavBar = () => {
  const handleContactIconClick = () => {
    window.open("https://github.com/koh1260", "_blank");
  };

  return (
    <Container>
      <NavContent>
        <BlogTitle>해성 블로그</BlogTitle>
        <ContactIconBlock>
          <Icon src={githubIcon} onClick={handleContactIconClick} />
        </ContactIconBlock>
      </NavContent>
    </Container>
  );
};

export default NavBar;
