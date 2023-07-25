import { styled } from "styled-components";
import PostList from "./PostList";
import CategoryBar from "./CategoryBar";

const Container = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  padding-left: 20px;
`;

const Main = () => {
  return (
    <Container>
        <CategoryBar />
        <PostList />
    </Container>
  );
};

export default Main;
