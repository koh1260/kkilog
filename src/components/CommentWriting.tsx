import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import { useAppSelector } from '../redux/hook';
import ClientExcepction from '../common/exceptions/client-exception';
import { Comment } from '../type';
import { WriteCommentData } from '../type/request';

interface CommentWritingProps {
  setCommentList: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-bottom: 24px;
`;

const WriterInfoBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  margin: 12px 0;
`;

const WriterInfoInput = styled.input`
  width: 25%;
  padding: 0.4rem 1rem;
  font-size: 1rem;
  outline: none;
  border: 2px solid #f8f9fa;
  border-radius: 7px;
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

const CommentWriting = ({ setCommentList }: CommentWritingProps) => {
  const isLogined = useAppSelector((state) => state.user.logined);
  const writerId = useAppSelector((state) => state.user.id);
  const { postId } = useParams() as { postId: string };
  const [content, setContent] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const refreshCommentList = async () => {
    const response = await api.getCommentList(+postId);
    if (response.statusCode === 200 && response.result)
      setCommentList(response.result);
  };

  // const handleOnClickPost = async () => {
  //   try {
  //     const response = await api.writeComment({
  //       postId,
  //       content,
  //       userId: String(writerId!)
  //     });

  //     if (response.statusCode === 201) refreshCommentList();
  //   } catch (e) {
  //     if (e instanceof ClientExcepction) {
  //       console.error(`Client Error: ${e.stack}`);
  //     }
  //     else if (e instanceof Error) {
  //       console.error(`Error: ${e.stack}`);
  //     }
  //   }
  // };

  const handleOnClickPost = async () => {
    try {
      let commentData: WriteCommentData;
      if (writerId) {
        commentData = {
          postId,
          content,
          userId: String(writerId!)
        };
      } else {
        commentData = {
          postId,
          content,
          nickname,
          password
        };
      }
      const response = await api.writeComment(commentData);
      if (response.statusCode === 201) {
        refreshCommentList();
        setContent('');
      }
    } catch (e) {
      if (e instanceof ClientExcepction) {
        console.error(`Client Error: ${e.stack}`);
      } else if (e instanceof Error) {
        console.error(`Error: ${e.stack}`);
      }
    }
  };

  const checkInput = () =>
    isLogined && writerId
      ? content.length < 1
      : content.length < 1 && nickname.length < 2 && password.length < 4;

  return (
    <Container>
      {!isLogined && (
        <WriterInfoBlock>
          <WriterInfoInput
            placeholder='닉네임'
            maxLength={10}
            onChange={(e) => setNickname(e.target.value)}
          />
          <WriterInfoInput
            type='password'
            placeholder='비밀번호 (6자리 이하)'
            maxLength={6}
            onChange={(e) => setPassword(e.target.value)}
          />
        </WriterInfoBlock>
      )}

      <CommentInput
        value={content}
        placeholder='댓글을 입력해주세요'
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setContent(e.target.value);
        }}
      />
      <SubmitButton disabled={checkInput()} onClick={handleOnClickPost}>
        등록
      </SubmitButton>
    </Container>
  );
};

export default CommentWriting;
