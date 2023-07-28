import React from 'react';
import { styled } from 'styled-components';
import CommentWriting from './CommentWriting';
import Comment from './Comment';
import CommentList from './CommentList';

const Container = styled.section`
  display: flex;
  flex-direction: column;
`

const CommentCount = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 7px;
`

const CommentBlock = () => {
  return (
    <Container>
      <CommentCount>12 개의 댓글</CommentCount>
      <CommentWriting />
      <CommentList />
    </Container>
  );
};

export default CommentBlock;