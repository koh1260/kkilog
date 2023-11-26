import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import CommentWriting from './CommentWriting';
import CommentList from './CommentList';
import { Comment } from '../type';

interface CommentBlockProps {
  comments: Comment[];
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const CommentCount = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 7px;
`;

const BottomRef = styled.div``

const CommentBlock = ({ comments }: CommentBlockProps) => {
  const bottomRef = useRef<HTMLInputElement>(null);
  const postId = useParams() as { postId: string };
  const [commentList, setCommentList] = useState<Comment[]>([]);

  useEffect(() => {
    setCommentList(comments);
  }, [postId])
  
  const scrollBottom = () => {
    bottomRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <Container>
      <CommentCount>{`${commentList.length}개의 댓글`}</CommentCount>
      <CommentWriting setCommentList={setCommentList} />
      <CommentList comments={commentList} scrollBottom={scrollBottom} />
      <BottomRef ref={bottomRef} />
    </Container>
  );
};

export default CommentBlock;
