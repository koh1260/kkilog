import { styled } from "styled-components";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

const BodyContainer = styled.section`
  display: flex;
  padding-left: 20px;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <NavBar />
      <BodyContainer>
        <CategoryBar />
        <Main />
      </BodyContainer>
      <Footer />
    </Container>
  );
};

export default Home;
