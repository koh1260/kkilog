import { styled } from 'styled-components';

const Container = styled.section`
  border-top: 0.5px solid rgb(199, 198, 198);
  display: flex;
  margin-bottom: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 9rem;
  width: 100%;

  @media screen and (max-width: 769px) {
    height: 6rem;
    margin-bottom: 2rem;
  }
`;

const IconBlock = styled.div``;

const Svg = styled.svg`
  cursor: pointer;
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: rgb(148, 148, 148);
  margin-top: 1rem;
`;

const Footer = () => (
  <Container>
    <IconBlock>
      <Svg
        onClick={() => window.open('https://github.com/koh1260', '_blank')}
        width='32'
        height='32'
        xmlns='http://www.w3.org/2000/svg'
      >
        <image
          href='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
          height='32'
          width='32'
        />
      </Svg>
    </IconBlock>
    <Copyright>© 2023 koh1260 All rights reserved.</Copyright>
  </Container>
);

export default Footer;
