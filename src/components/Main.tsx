import { styled } from "styled-components";
import PostList from "./PostList";

const Container = styled.main`
  padding-top: 7rem;
  display: flex;
`;

const Contents = styled.section`
  display: flex;
  padding: 0 1.4rem;
  width: 100%;
`;

const Main = () => {
  return (
    <Container>
      <Contents>
        <PostList />
      </Contents>
    </Container>
  );
};

export default Main;
