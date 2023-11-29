import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import BodyContainer from '../components/BodyContainer';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  flex: 1;
`;

const BodyBlock = styled.div`
  display: flex;
  height: 100%;
`;

const Vanner = styled.section`
  background-image: url('https://haesungsbucket.s3.ap-northeast-2.amazonaws.com/kkilog/vanner.png');
  background-size: cover;
  background-position: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 600px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VannerTextBlock = styled.div`
  color: white;
  padding: 0 5rem;

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;



const VannerTitle = styled.h1`
  font-family: 'Bagel Fat One', cursive;
  font-weight: 400;
  font-size: 6rem;

  @media screen and (max-width: 1024px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BlogButton = styled.button`
  font-family: 'Bagel Fat One', cursive;
  margin-top: 2rem;
  padding: 0.4rem 0.8rem;
  font-size: 1.5rem;
  border-radius: 4px;
  color: white;
  background-color: rgba(255, 255, 255, 0.17);
  border: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.37);
  }
`;

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavBar />
      <Vanner>
        <VannerTextBlock>
          <VannerTitle>Welcome!!</VannerTitle>
          <VannerTitle>KKI.log</VannerTitle>
          <BlogButton onClick={() => navigate('/blog')}>블로그</BlogButton>
        </VannerTextBlock>
      </Vanner>
      <BodyContainer>
        <BodyBlock>
          <Main>
            <AboutMe />
          </Main>
        </BodyBlock>
      </BodyContainer>
      <Footer />
    </Container>
  );
};

export default MainPage;
