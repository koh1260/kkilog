import React from 'react';
import { styled } from 'styled-components';
import {AiOutlineHeart} from 'react-icons/ai';
// import {AiFillHeart} from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #F8F9FA;
`

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
`

const Profileimage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 0.5px solid gray;
  margin-right: 14px;
`

const Content = styled.div`
  padding: 24px 0;
`

const LikeBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

const Comment = () => {
  return (
    <Container>
      <WriterInfo>
        <Profileimage src='https://velog.velcdn.com/images/a001206/post/4c94f9f8-40d7-4d12-b07e-0ca6053556a5/image.png'/>
        <p className='nickname'>닉네임</p>
        <p className='create-at'>2020.10.10</p>
      </WriterInfo>
      <Content>코끼리가 쩌는군요!</Content>
      <LikeBlock>
        <p className='like-count'>좋아요 1개</p>
        <AiOutlineHeart size={'21px'}/>
      </LikeBlock>
    </Container>
  );
};

export default Comment;