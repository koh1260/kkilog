import { styled } from "styled-components";

interface PostProps {
  title: string;
  thumbnail: string;
  introduction: string;
  createAt: Date;
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

const Title = styled.h2`
  margin: 0.5rem;
`;

const Introduction = styled.p`
  margin: 0.2rem;
`;

const CreateAt = styled.p`
  margin: 0.2rem;
  font-size: 0.8rem;
  color: lightslategray;
`;

const Post = ({ title, thumbnail, introduction, createAt }: PostProps) => {
  return (
    <Container>
      <ThubnailImage src={thumbnail} />
      <Content>
        <Title>{title}</Title>
        <Introduction>{introduction}</Introduction>
        <CreateAt>{`${createAt.getFullYear()}.${createAt.getMonth()}.${createAt.getDate()}`}</CreateAt>
      </Content>
    </Container>
  );
};

export default Post;
