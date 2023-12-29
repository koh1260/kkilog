import React from 'react';
import { styled } from 'styled-components';
import PostContent from './PostContent';
import OtherPostNavigation from './OtherPostNavigation';
import CommentBlock from './CommentBlock';
import { Post } from '../type';
import PostLike from './PostLike';

interface DetailProps {
  post: Post;
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

const Detail = ({ post }: DetailProps) => (
  <Container>
    <PostContent
      post={post}
    />
    <PostLike postId={post.id} />
    <OtherPostNavigation postId={post.id} />
    <CommentBlock comments={post.comments} />
  </Container>
);

export default Detail;
