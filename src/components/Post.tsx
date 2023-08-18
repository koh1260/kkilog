import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

interface PostProps {
  id: number;
  title: string;
  thumbnail: string;
  introduction: string;
  createAt: Date;
  commentCount: number;
}

const Container = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  width: calc(33.33% - 16px);
  border: 0.5px solid lightgray;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: calc(50% - 16px);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

const ThubnailImage = styled.img`
  width: 100%;
  margin-bottom: 0.2rem;
`;

const Content = styled.div`
  margin: 0.4rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Introduction = styled.p`
  margin: 0.5rem 0;
`;

const Bottom = styled.div`
  display: flex;
`;

const CommentCount = styled.p`
  font-size: 0.8rem;
  color: lightslategray;
`;

const Dash = styled.div`
  margin: 0.2rem;
  font-size: 0.8rem;
  color: lightslategray;
`;

const CreateAt = styled.p`
  font-size: 0.8rem;
  color: lightslategray;
`;

const Post = ({
  id,
  title,
  thumbnail,
  introduction,
  createAt,
  commentCount
}: PostProps) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/${id}`)}>
      <ThubnailImage src={thumbnail} />
      <Content>
        <Title>{title}</Title>
        <Introduction>{introduction}</Introduction>
        <Bottom>
          <CreateAt>{createAt.toString()}</CreateAt>
          <Dash>·</Dash>
          <CommentCount>{`댓글 ${commentCount}개`}</CommentCount>
        </Bottom>
      </Content>
    </Container>
  );
}

export default Post;
