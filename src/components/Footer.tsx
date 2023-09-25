import { styled } from 'styled-components';

const Container = styled.section`
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  width: 100%;
  background-color: #292d3e;
  /* bottom: 0; */
`;

const Email = styled.h3`
  color: white;
  margin: 0 16px;
`;

const Icon = styled.img`
  width: 42px;
  height: 42px;
  color: white;
`;

const Footer = () => (
  <Container>
    <Icon src='https://haesungsbucket.s3.ap-northeast-2.amazonaws.com/kkilog/elephant.png' />
    <Email>koh1260@naver.com</Email>
    <Icon src='https://haesungsbucket.s3.ap-northeast-2.amazonaws.com/kkilog/elephant.png' />
  </Container>
);

export default Footer;
