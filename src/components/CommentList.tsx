import React from 'react';
import { styled } from 'styled-components';
import Comment from './Comment';
import { Comment as IComment } from '../type';

interface CommentListProps {
  comments: IComment[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px 0;
`;

const CommentList = ({comments}: CommentListProps) => (
    <Container>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          nickname={comment.writer.nickname}
          content={comment.content}
          profileImage={comment.profileImage}
          createAt={comment.createAt}
        />
      ))}
    </Container>
  )

export default CommentList;
