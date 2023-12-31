import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import formatDate from '../lib/format-date';
import { useAppSelector } from '../redux/hook';
import { Post } from '../type';
import stringToDate from '../lib/transform-date';
import MarkdownParser from './MarkdownParser';

interface PostContentProps {
  post: Post;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 1.4rem 0;

  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 769px) {
    font-size: 1.4rem;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ThumbnailBlock = styled.div`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;

const Utils = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostInfoBlock = styled.div`
  display: flex;
  gap: 7px;

  .nickname {
    font-weight: 600;
  }
  .create_at {
    color: gray;
  }
`;

const EditBlock = styled.div`
  display: flex;
  gap: 7px;
`;

const StyledButton = styled.button`
  color: gray;
  background-color: transparent;
  border: none;
`;

const PostContent = ({ post }: PostContentProps) => {
  const navigate = useNavigate();
  const role = useAppSelector((state) => state.user.role);

  return (
    <Container>
      <Title>{post.title}</Title>
      <Utils>
        <PostInfoBlock>
          <p className='nickname'>{post.writer.nickname}</p>
          <p>·</p>
          <p className='create_at'>{formatDate(stringToDate(post.createAt))}</p>
        </PostInfoBlock>
        {role === 'ADMIN' && (
          <EditBlock>
            <StyledButton
              onClick={() =>
                navigate(`/blog/edit/${post.id}`, {
                  state: {
                    post
                  }
                })
              }
            >
              수정
            </StyledButton>
            <StyledButton>삭제</StyledButton>
          </EditBlock>
        )}
      </Utils>
      <ThumbnailBlock>
        <Thumbnail src={post.thumbnail} />
      </ThumbnailBlock>
      <MarkdownParser markdownText={post.content} />
    </Container>
  );
};

export default PostContent;
