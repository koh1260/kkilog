import { styled } from "styled-components";
import Post from "./Post";
import { posts } from "../data/mockData";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 640px;
  flex-wrap: wrap;
  gap: 10px;
`;

const PostList = () => {
  return (
    <Container>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          thumbnail={post.thumbnail}
          introduction={post.introduction}
          createAt={post.createAt}
        />
      ))}
    </Container>
  );
};
export default PostList;
