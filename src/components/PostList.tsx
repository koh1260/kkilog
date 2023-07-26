import { styled } from "styled-components";
import Post from "./Post";
import { posts } from "../data/mockData";

const Container = styled.section`
  width: 100%;
  width: 1020px;
  margin: 0 auto;
`;

const PostCountBlock = styled.div`
  display: flex;
  gap: 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  border-bottom: 0.5px solid black;
`

const PostCountText = styled.h3`
  
`

const PostCountNumber = styled.h3`
  color: red;
`

const PostContainer = styled.div`
  /* display: flex;
  justify-content: center;
  width: 100%; */
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
      <PostCountBlock>
        <PostCountText>Total </PostCountText>
        <PostCountNumber>4</PostCountNumber>
      </PostCountBlock>
      <PostContainer>
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
      </PostContainer>
    </Container>
  );
};
export default PostList;
