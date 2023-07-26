import { styled } from "styled-components";
import elephant from '../assets/img/elephant.png';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background-color: #292d3e;
`;

const Email = styled.h3`
  color: white;
  margin: 0 16px;
`;

const Icon = styled.img`
  width: 42px;
  height: 42px;
  color: white;
`

const Footer = () => {
  return (
    <Container>
      <Icon src={elephant} />
      <Email>koh1260@naver.com</Email>
      <Icon src={elephant} />
    </Container>
  );
};

export default Footer;
