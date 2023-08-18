import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Post } from '../type';

interface PostContentProps {
  post: Post
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

const PostContent = ({post}: PostContentProps) => {
  const navigate = useNavigate();
  // const formatDate = (date: Date) => `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`;

  return (
    <Container>
      <Title>{post.title}</Title>
      <Utils>
        <PostInfoBlock>
          <p className="nickname">{post.writer.nickname}</p>
          <p>·</p>
          <p className="create_at">{post.createAt.toString()}</p>
        </PostInfoBlock>
        <EditBlock>
          <StyledButton onClick={() => navigate(`/edit/${post.id}`, {state: {content: post.content}})}>수정</StyledButton>
          <StyledButton>삭제</StyledButton>
        </EditBlock>
      </Utils>
      <Thumbnail src={post.thumbnail} />
      {/* <Content>{post.content}</Content> */}
      <MDEditor.Markdown source={post.content} style={{ whiteSpace: 'pre-wrap' }} />
    </Container>
  );
}

export default PostContent;
