import React from "react";
import { styled } from "styled-components";
import { comments } from "../data/mockData";
import Comment from "./Comment";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px 0;
`;

const CommentList = () => {
  return (
    <Container>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          nickname={comment.writer.nickname}
          content={comment.content}
          createAt={comment.createAt}
        />
      ))}
    </Container>
  );
};

export default CommentList;
