import React from "react";
import { styled } from "styled-components";
import PostContent from "./PostContent";
import OtherPostNavigation from "./OtherPostNavigation";
import CommentBlock from "./CommentBlock";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Detail = () => {
  return (
    <Container>
      <PostContent />
      <OtherPostNavigation />
      <CommentBlock />
    </Container>
  );
};

export default Detail;
