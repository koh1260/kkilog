import { styled } from "styled-components";
import Main from "../components/Main";
import NavBar from "../components/NavBar";

const Container = styled.article`
  height: 100vh;
  flex: 1;
`

const Home = () => {
  return (
    <Container>
      <NavBar />
      <Main />
    </Container>
  );
};

export default Home;
