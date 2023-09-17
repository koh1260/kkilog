import React, { useEffect, useState } from 'react';
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

const CommentBlock = ({ comments }: CommentBlockProps) => {
  const postId = useParams() as { postId: string };
  const [commentList, setCommentList] = useState<Comment[]>([]);

  useEffect(() => {
    setCommentList(comments);
  }, [postId])
  

  return (
    <Container>
      <CommentCount>{`${commentList.length}개의 댓글`}</CommentCount>
      <CommentWriting setCommentList={setCommentList} />
      <CommentList comments={commentList} />
    </Container>
  );
};

export default CommentBlock;
