import React from 'react';
import { styled } from 'styled-components';
import CommentWriting from './CommentWriting';
import CommentList from './CommentList';
import { Comment } from '../type';

interface CommentBlockProps {
  comments: Comment[];
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
`

const CommentCount = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 7px;
`

const CommentBlock = ({comments}: CommentBlockProps) => (
    <Container>
      <CommentCount>{`${comments.length}개의 댓글`}</CommentCount>
      <CommentWriting />
      <CommentList comments={comments}/>
    </Container>
  )

export default CommentBlock;