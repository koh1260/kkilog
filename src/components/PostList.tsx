import { styled } from "styled-components";
import Post from "./Post";
import { posts } from "../data/mockData";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1;
  padding-left: 10px;
`;

const PostOuter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: min-content;
  flex-wrap: wrap;
  gap: 10px;
`;

const PostList = () => {
  return (
    <Container>
      <PostOuter>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            thumbnail={post.thumbnail}
            introduction={post.introduction}
            createAt={post.createAt}
          />
        ))}
      </PostOuter>
    </Container>
  );
};
export default PostList;
