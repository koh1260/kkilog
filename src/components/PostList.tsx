import { styled } from "styled-components";
import Post from "./Post";
import { Post as IPost } from "../type";

interface PostListProps {
  categoryName: string;
  posts: IPost[];
}

const Container = styled.section`
  width: 100%;
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

const PostList = ({categoryName, posts}: PostListProps) => {
  return (
    <Container>
      <PostCountBlock>
        <PostCountText>{categoryName}</PostCountText>
        <PostCountNumber>{posts.length}</PostCountNumber>
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
              commentCount={post.commentCount}
            />
          ))}
        </PostOuter>
      </PostContainer>
    </Container>
  );
};
export default PostList;
