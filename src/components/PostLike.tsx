import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import api from '../api/api';
import { useAppSelector } from '../redux/hook';
import ClientExcepction from '../common/exceptions/client-exception';

interface PostLikeProps {
  postId: number;
}

const Container = styled.div`
  display: flex;
  border-top: 0.5px solid lightgray;
  border-bottom: 0.5px solid lightgray;
  align-items: center;
  padding: 1rem;
  margin-bottom: 48px;
`;

const LikeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LikeButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    .heart {
      fill: red;
    }
  }
`;

interface LikeIconProps {
  $isActive: boolean;
}

const LikeIcon = styled.img<LikeIconProps>`
  fill: red;
  width: ${(props) => props.$isActive ? '4rem' : '2.5rem'};
  transition: width 0.1s ease-in-out;
  margin-bottom: 4px;
/* 
  &:hover {
    width: ${(props) => props.$isActive ? '3.5rem' : '3rem'};
  } */
`;

const LikeCount = styled.h4``;

const DoLikeText = styled.h4`
  margin-left: 24px;
  font-size: 1.2rem;
`;

const PostLike = ({postId}: PostLikeProps) => {
  const isLogined = useAppSelector((state) => state.user.logined);
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    console.log('like');
    console.log(likeCount);
    (async () => {
      if (isLogined) {
        const response = await api.postLikeCheck(postId);
        
        setLiked(response.result!.liked);
        
      }
    })();
  }, [postId, isLogined, liked])

  useEffect(() => {
    (async () => {
      try {
        const response = await api.postLikeCount(postId);
        setLikeCount(response.result!.likeCount);
      } catch(e) {
        if (e instanceof ClientExcepction) console.error(e.stack);
        else if (e instanceof Error) console.error();
      }
    })();
  }, [postId])

  const handleOnClick = async () => {
    if (!isLogined) {
      alert('로그인을 해주세요!');
      return;
    }
    const response = await api.postLike(postId);
    setLikeCount(response.result!.likeCount);
    if (liked) setLiked(false);
    else setLiked(true);
  }

  return (
    <Container>
      <LikeBlock>
        <LikeButton onClick={handleOnClick}>
          <LikeIcon $isActive={liked} alt='좋아요 코끼리 SVG' src='https://haesungsbucket.s3.ap-northeast-2.amazonaws.com/kkilog/elephant.svg' />
        </LikeButton>
        <LikeCount>{likeCount}</LikeCount>
      </LikeBlock>
      <DoLikeText>🐘 게시글이 마음에 드신다면 코끼리를 눌러주세요! 🐘</DoLikeText>
    </Container>
  );
};

export default PostLike;