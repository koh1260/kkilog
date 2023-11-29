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

const Copyright = styled.p`
  font-size: 0.8rem;
  color: rgb(148, 148, 148);
  margin-top: 1rem;
`;

const Footer = () => (
  <Container>
    <IconBlock>
      <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'>
        <image
          href='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
          height='32'
          width='32'
        />
      </svg>
    </IconBlock>
    <Copyright>© 2023 Haesung Kang</Copyright>
  </Container>
);

export default Footer;
