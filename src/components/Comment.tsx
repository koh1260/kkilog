import React from 'react';
import { styled } from 'styled-components';
// import { AiOutlineHeart } from 'react-icons/ai';
import formatDate from '../lib/format-date';

interface CommentProps {
  id: number;
  nickname: string;
  content: string;
  profileImage: string;
  createAt: Date;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
  border-radius: 12px;
  border: 2px solid #f8f9fa;
`;

const WriterInfo = styled.div`
  display: flex;
  align-items: center;

  .nickname {
    margin-right: 7px;
    font-weight: 600;
  }
  .create-at {
    color: gray;
  }
`;

const Profileimage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 0.5px solid lightgray;
  margin-right: 14px;
`;

const Content = styled.div`
  padding: 24px 0;
`;

const LikeBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Comment = ({ id, nickname, content, createAt, profileImage }: CommentProps) => {
  console.log(profileImage);
  return (
    <Container>
      <WriterInfo key={id}>
        <Profileimage src={profileImage} />
        <p className='nickname'>{nickname}</p>
        <p className='create-at'>{formatDate(createAt)}</p>
      </WriterInfo>
      <Content>{content}</Content>
      <LikeBlock>
        {/* <p className='like-count'>좋아요 1개</p>
        <AiOutlineHeart size='21px' /> */}
      </LikeBlock>
    </Container>
  );
}

export default Comment;
