import React from "react";
import { styled } from "styled-components";
// 실제론 api 요청
import { post } from "../data/mockData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;

const Title = styled.h2`

`;

const Thumbnail = styled.img``;

const Utils = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostInfoBlock = styled.div`
  display: flex;
  gap: 7px;

  .nickname {
    font-weight: 600;
  }
  .create_at {
    color: gray;
  }
`;

const EditBlock = styled.div`
  display: flex;
  gap: 7px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;

const Content = styled.div``;

const PostContent = () => {
  const formatDate = (date: Date) => {
    return `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`;
  };

  return (
    <Container>
      <Title>{post.title}</Title>
      <Utils>
        <PostInfoBlock>
          <p className="nickname">{post.writer.nickname}</p>
          <p>·</p>
          <p className="create_at">{formatDate(post.createAt)}</p>
        </PostInfoBlock>
        <EditBlock>
          <StyledButton>수정</StyledButton>
          <StyledButton>삭제</StyledButton>
        </EditBlock>
      </Utils>
      <Thumbnail src={post.thumbnail} />
      <Content>{post.content}</Content>
    </Container>
  );
};

export default PostContent;
