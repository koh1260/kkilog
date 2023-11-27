import MDEditor from '@uiw/react-md-editor';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import formatDate from '../lib/format-date';
import { useAppSelector } from '../redux/hook';

interface PostContentProps {
  id: number;
  title: string;
  introduction: string;
  content: string;
  publicScope: 'PUBLIC' | 'PRIVATE';
  createAt: Date;
  writer: string;
  thumbnail: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 1.4rem 0;

  @media screen and (max-width: 1024px){
    font-size: 2.2rem;
  }

  @media screen and (max-width: 769px){
    font-size: 1.4rem;
  }
`;

const Thumbnail = styled.img`
  margin-top: 2rem;
  margin-bottom: 4rem;
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

const CustomMDEditor = styled(MDEditor.Markdown)`
  background-color: white;
  color: black;
`;

const PostContent = ({
  id,
  title,
  introduction,
  content,
  writer,
  thumbnail,
  publicScope,
  createAt
}: PostContentProps) => {
  const navigate = useNavigate();
  const role = useAppSelector((state) => state.user.role);

  return (
    <Container>
      <Title>{title}</Title>
      <Utils>
        <PostInfoBlock>
          <p className='nickname'>{writer}</p>
          <p>·</p>
          <p className='create_at'>{formatDate(createAt)}</p>
        </PostInfoBlock>
        {role === 'ADMIN' && (
          <EditBlock>
            <StyledButton
              onClick={() =>
                navigate(`/blog/edit/${id}`, {
                  state: {
                    id,
                    title,
                    introduction,
                    thumbnail,
                    content,
                    publicScope
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
      <Thumbnail src={thumbnail} />
      {/* <Content>{post.content}</Content> */}
      <CustomMDEditor source={content} style={{ whiteSpace: 'pre-wrap' }} />
    </Container>
  );
};

export default PostContent;
