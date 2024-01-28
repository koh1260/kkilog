import { styled } from 'styled-components';
import Post from './Post';
import { PreviewPostData } from '../type';

interface PostListProps {
  categoryName?: string;
  posts: PreviewPostData[];
}

const Container = styled.section`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    margin: 0;
  }
`;

const PostCountBlock = styled.div`
  display: flex;
  gap: 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  align-items: center;
  /* border-bottom: 0.5px solid black; */
`;

const PostCountText = styled.h3`
  font-family: 'Noto Color Emoji', sans-serif;

  @media screen and (min-width: 769px) {
    margin-left: 12px;
  }
`;

const PostContainer = styled.div``;

const PostOuter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: min-content;
  flex-wrap: wrap;

  @media screen and (max-width: 1000px) {
    gap: 0;
  }
`;

const NotFountPost = styled.div`
  margin-top: 4rem;
  width: 100%;
  text-align: center;
  color: rgb(171, 171, 171);
  font-size: 1rem;
`;
const PostList = ({ categoryName, posts }: PostListProps) => (
  <Container>
    <PostCountBlock>
      <PostCountText>{categoryName || '🦖All Posts'}</PostCountText>
    </PostCountBlock>
    <PostContainer>
      <PostOuter>
        {posts.length === 0
          ? (<NotFountPost>_〆(･_･｡) 공부가 더 필요해요..</NotFountPost>)
          : (posts.map((post) => <Post key={post.id} post={post} />))}
      </PostOuter>
    </PostContainer>
  </Container>
);
export default PostList;
