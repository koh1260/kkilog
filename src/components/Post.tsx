import { styled } from "styled-components";

interface PostProps {
  title: string;
  thumbnail: string;
  introduction: string;
  createAt: Date;
  commentCount: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33.33% - 10px);
  border: 0.5px solid lightgray;
`;

const ThubnailImage = styled.img`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Introduction = styled.p`
  margin: 0.2rem;
`;

const Bottom = styled.div`
  display: flex;
`;

const CommentCount = styled.p`
  margin: 0.2rem;
  font-size: 0.8rem;
  color: lightslategray;
`;

const Dash = styled.div`
margin: 0.2rem;
  font-size: 0.8rem;
  color: lightslategray;
`

const CreateAt = styled.p`
  margin: 0.2rem;
  font-size: 0.8rem;
  color: lightslategray;
`;

const Post = ({ title, thumbnail, introduction, createAt, commentCount }: PostProps) => {
  return (
    <Container>
      <ThubnailImage src={thumbnail} />
      <Content>
        <Title>{title}</Title>
        <Introduction>{introduction}</Introduction>
        <Bottom>
          <CreateAt>{`${createAt.getFullYear()}.${createAt.getMonth()}.${createAt.getDate()}`}</CreateAt>
          <Dash>·</Dash>
          <CommentCount>{`댓글 ${commentCount}개`}</CommentCount>
        </Bottom>
      </Content>
    </Container>
  );
};

export default Post;
