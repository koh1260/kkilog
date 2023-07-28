import React from "react";
import { styled } from "styled-components";
import nextArrow from '../assets/img/next-arrow.png';
import previousArrow from '../assets/img/previous-arrow.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`;

const NavigationBlock = styled.div`
  background-color: #F8F9FA;
  border-radius: 12px;
  display: flex;
  padding: 12px 14px;
  width: 45%;
   &.next {
    justify-content: end;
   }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;

const Icon = styled.img`
  width: 52px;
  height: 52px;

  &.previous {
    margin-right: 12px;
  }
  &.next {
    margin-left: 12px;
  }
`

const OtherPost = styled.div`
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

const OtherPostTitle = styled.h3`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const OtherPostNavigation = () => {
  return (
    <Container>
      <NavigationBlock>
        <StyledButton>
          <Icon className="previous" src={previousArrow}/>
        </StyledButton>
        <OtherPost>
          <PreviousPostText>이전 글</PreviousPostText>
          <OtherPostTitle>React 너무 어렵군!!</OtherPostTitle>
        </OtherPost>
      </NavigationBlock>

      <NavigationBlock className="next">
        <OtherPost>
          <NextPostText>다음 글</NextPostText>
          <OtherPostTitle>React 너무 어렵군!!</OtherPostTitle>
        </OtherPost>
        <StyledButton>
          <Icon className="next" src={nextArrow}/>
        </StyledButton>
      </NavigationBlock>
    </Container>
  );
};

export default OtherPostNavigation;
