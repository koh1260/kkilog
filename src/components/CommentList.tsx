import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import Comment from './Comment';
import { Comment as IComment } from '../type';
import stringToDate from '../lib/transform-date';

interface CommentListProps {
  comments: IComment[];
  scrollBottom(): void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px 0;
`;

const CommentList = ({ comments, scrollBottom }: CommentListProps) => {
  useEffect(() => {
    scrollBottom();
  }, [comments])

  return (
    <Container>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          nickname={comment.writer ? comment.writer.nickname : comment.nickname}
          content={comment.content}
          profileImage={
            comment.writer
              ? comment.writer.profileImage
              : 'https://cdn.dribbble.com/users/690037/screenshots/16596083/elephant_logo-01_4x.jpg'
          }
          createAt={stringToDate(comment.createAt)}
        />
      ))}
    </Container>
  );
};

export default CommentList;
