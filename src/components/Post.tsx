import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import {PiHeartDuotone} from 'react-icons/pi';
import formatDate from '../lib/format-date';

interface PostProps {
  id: number;
  title: string;
  thumbnail: string;
  introduction: string;
  likes: number;
  createAt: Date;
  commentCount: number;
}

const Container = styled.div`
  background-color: white;
  margin: 8px;
  display: flex;
  flex-direction: column;
  width: calc(33.33% - 16px);
  height: 25rem;
  /* border: 0.5px solid lightgray; */
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 10px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 7px 10px 5px rgba(0, 0, 0, 0.09);
  }

  @media screen and (max-width: 1024px) {
    width: calc(50% - 16px);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

const ImageBlock = styled.div`
  height: 60%;
`;

const ThubnailImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 0.2rem;
  object-fit: cover;
`;

const Content = styled.div`
  margin: 0.4rem;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0.4rem 0;
`;

const Introduction = styled.p`
  margin: 0.5rem 0;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentAndCreateAtBlock = styled.div`
  display: flex;
`;

const CommentCount = styled.p`
  font-size: 0.8rem;
  color: lightslategray;
`;

const CreateAt = styled.p`
  font-size: 0.8rem;
  color: lightslategray;
  margin-right: 12px;
`;

const LikeBlock = styled.div`
  display: flex;
  align-items: center;
`;

const LikeCount = styled.p`
  font-size: 0.7rem;
  margin-left: 4px;
`;

const Post = ({
  id,
  title,
  thumbnail,
  introduction,
  likes,
  createAt,
  commentCount
}: PostProps) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/blog/${id}`)}>
      <ImageBlock>
        <ThubnailImage src={thumbnail} />
      </ImageBlock>
      <Content>
        <Title>{title}</Title>
        <Introduction>{introduction}</Introduction>
        <Bottom>
          <CommentAndCreateAtBlock>
          <CreateAt>{formatDate(createAt)}</CreateAt>
          <CommentCount>{`댓글 ${commentCount}개`}</CommentCount>
          </CommentAndCreateAtBlock>
          <LikeBlock>
          <PiHeartDuotone />
          <LikeCount>{likes}</LikeCount>
          </LikeBlock>
        </Bottom>
      </Content>
    </Container>
  );
};

export default Post;
