import { styled } from 'styled-components';
import Post from './Post';
import { PostPreview } from '../type';
import stringToDate from '../lib/transform-date';

interface PostListProps {
  categoryName: string;
  posts: PostPreview[];
}

const Container = styled.section`
padding: 0 24px;
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
  /* border-bottom: 0.5px solid black; */
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

  @media screen and (max-width: 1000px) {
    gap: 0;
  }
`;

const PostList = ({categoryName, posts}: PostListProps) => (
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
              id={post.id}
              title={post.title}
              thumbnail={post.thumbnail}
              introduction={post.introduction}
              likes={post.likes}
              createAt={stringToDate(post.createAt)}
              commentCount={post.commentCount}
            />
          ))}
        </PostOuter>
      </PostContainer>
    </Container>
  )
export default PostList;
