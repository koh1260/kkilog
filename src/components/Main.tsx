import { styled } from "styled-components";
import PostList from "./PostList";

const Container = styled.main`
  margin: 4rem 0;
  display: flex;
  height: 100%;
  width: 100%;
`;

const Main = () => {
  return (
    <Container>
      <PostList />
    </Container>
  );
};

export default Main;
