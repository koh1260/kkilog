import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import ClientExcepction from '../common/exceptions/client-exception';
import { Comment } from '../type';
import { openLoginModal } from '../redux/slice/login-modal-slice';

interface CommentWritingProps {
  setCommentList: React.Dispatch<React.SetStateAction<Comment[]>>;
  scrollBottom(): void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-bottom: 24px;
`;

const CommentInput = styled.textarea`
  width: 100%;
  min-height: 6rem;
  padding: 1rem;
  margin-bottom: 12px;
  font-size: 1rem;
  outline: none;
  border: 2px solid #f8f9fa;
  border-radius: 12px;
`;

interface SubmitButtonProps {
  disabled: boolean;
}

const SubmitButton = styled.button<SubmitButtonProps>`
  width: 5rem;
  height: 2rem;
  font-size: 1em;
  font-weight: 600;
  background-color: ${(props) => (props.disabled ? 'gray' : '#2c96ff')};
  color: white;
  border: none;
  border-radius: 7px;
`;

const CommentWriting = ({
  setCommentList,
  scrollBottom
}: CommentWritingProps) => {
  const dispatch = useAppDispatch();
  const isLogined = useAppSelector((state) => state.user.logined);
  const writerId = useAppSelector((state) => state.user.id);
  const { postId } = useParams() as { postId: string };
  const [content, setContent] = useState('');

  const refreshCommentList = async () => {
    const response = await api.getCommentList(+postId);
    if (response.statusCode === 200 && response.result) {
      setCommentList(response.result);
      scrollBottom();
    }
  };

  const handleOnClickPost = async () => {
    try {
      const commentData = {
        postId,
        content,
        userId: String(writerId!)
      };

      const response = await api.writeComment(commentData);
      if (response.statusCode === 201) {
        refreshCommentList();
        setContent('');
      }
    } catch (e) {
      if (e instanceof ClientExcepction) {
        console.error(`${e.stack}`);
      } else if (e instanceof Error) {
        console.error(`${e.stack}`);
      }
    }
  };

  const handleOnClickLogin = () => {
    dispatch(openLoginModal());
  }

  const checkInput = () => content.length < 1;

  return (
    <Container>
      <CommentInput
        disabled={!isLogined}
        value={content}
        placeholder={isLogined ? '댓글을 작성해보세요.' : '로그인 후 댓글을 작성해주세요.'}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setContent(e.target.value);
        }}
      />
      {isLogined ? (
        <SubmitButton disabled={checkInput()} onClick={handleOnClickPost}>
          등록
        </SubmitButton>
      ) : (
        <SubmitButton disabled={false} onClick={handleOnClickLogin}>
          로그인
        </SubmitButton>
      )}
    </Container>
  );
};

export default CommentWriting;
