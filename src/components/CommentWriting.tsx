import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const CommentInput = styled.textarea`
  width: 100%;
  min-height: 6rem;
  padding: 1rem;
  margin-bottom: 12px;
  font-size: 1rem;
  outline: none;
  border: 2px solid #F8F9FA;
`;

const SubmitButton = styled.button`
  width: 5rem;
  height: 2rem;
  font-size: 1em;
  font-weight: 600;
  background-color: #2C96FF;
  color: white;
  border: none;
  border-radius: 7px;
`;

const CommentWriting = () => {
  return (
    <Container>
      <CommentInput placeholder='댓글을 입력해주세요' />
      <SubmitButton>등록</SubmitButton>
    </Container>
  );
};



export default CommentWriting;