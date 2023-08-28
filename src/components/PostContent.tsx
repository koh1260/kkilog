import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import formatDate from '../lib/format-date';

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

// const Content = styled.div``;

const PostContent = ({
  id,
  title,
  introduction,
  content,
  writer,
  thumbnail,
  publicScope,
  createAt,
}: PostContentProps) => {
  const navigate = useNavigate();
  // const formatDate = (date: Date) => `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`;

  return (
    <Container>
      <Title>{title}</Title>
      <Utils>
        <PostInfoBlock>
          <p className='nickname'>{writer}</p>
          <p>·</p>
          <p className='create_at'>{formatDate(createAt)}</p>
        </PostInfoBlock>
        <EditBlock>
          <StyledButton
            onClick={() =>
              navigate(`/blog/edit/${id}`, {
                state: { id, title, introduction, thumbnail, content, publicScope }
              })
            }
          >
            수정
          </StyledButton>
          <StyledButton>삭제</StyledButton>
        </EditBlock>
      </Utils>
      <Thumbnail src={thumbnail} />
      {/* <Content>{post.content}</Content> */}
      <MDEditor.Markdown
        source={content}
        style={{ whiteSpace: 'pre-wrap' }}
      />
    </Container>
  );
};

export default PostContent;
