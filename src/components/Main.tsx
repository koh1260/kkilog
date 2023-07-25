import { styled } from "styled-components";
import PostList from "./PostList";
import CategoryBar from "./CategoryBar";

const Container = styled.main`
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
