import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import nextArrow from '../assets/img/next-arrow.png';
import previousArrow from '../assets/img/previous-arrow.png';
import { OtherPost as OtherPostType } from '../type';
import api from '../api/api';

interface OtherPostNavigationProps {
  postId: number;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }
`;

const NavigationBlock = styled.div`
  cursor: pointer;
  background-color: #f8f9fa;
  border-radius: 12px;
  display: flex;
  padding: 12px 14px;
  width: 45%;

  &.next {
    justify-content: end;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;

const Icon = styled.img`
  width: 52px;
  height: 52px;
  transition: all 0.2s;

  &.previous {
    margin-right: 12px;
  }
  &.previous:hover {
    transform: translateX(-10px);
  }
  &.next {
    margin-left: 12px;
  }
  &.next:hover {
    transform: translateX(10px);
  }
`;

const OtherPost = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PreviousPostText = styled.div``;

const NextPostText = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

const OtherPostTitle = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  font-weight: 600;
`;

const OtherPostNavigation = ({ postId }: OtherPostNavigationProps) => {
  const navigate = useNavigate();
  const [postsInfo, setPostsInfo] = useState<OtherPostType[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await api.getPreviousAndNextPost(postId);
        setPostsInfo([...response.result!]);
      } catch (e) {
        if (e instanceof Error) console.error(`Error: ${e.stack}`);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <Container>
      {postsInfo[0] ? (
        <NavigationBlock onClick={() => navigate(`/blog/${postsInfo[0].id}`)}>
          <StyledButton>
            <Icon className='previous' src={previousArrow} />
          </StyledButton>
          <OtherPost>
            <PreviousPostText>이전 글</PreviousPostText>
            <OtherPostTitle>{postsInfo[0].title}</OtherPostTitle>
          </OtherPost>
        </NavigationBlock>
      ) : (
        <div />
      )}

      {postsInfo[1] ? (
        <NavigationBlock className='next'  onClick={() => navigate(`/blog/${postsInfo[1].id}`)}>
          <OtherPost>
            <NextPostText>다음 글</NextPostText>
            <OtherPostTitle>{postsInfo[1].title}</OtherPostTitle>
          </OtherPost>
          <StyledButton>
            <Icon className='next' src={nextArrow} />
          </StyledButton>
        </NavigationBlock>
      ) : (
        <div />
      )}
    </Container>
  );
};

export default OtherPostNavigation;
