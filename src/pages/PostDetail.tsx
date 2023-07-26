import { styled } from "styled-components";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer";
import Detail from "../components/Detail";

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

const PostDetail = () => {
  return (
    <Container>
      <NavBar />
      <BodyContainer>
        <CategoryBar />
        <Main>
          <Detail />
        </Main>
      </BodyContainer>
      <Footer />
    </Container>
  );
};

export default PostDetail;
