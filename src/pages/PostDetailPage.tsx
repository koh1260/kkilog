import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import usePostDetail from '../hooks/usePostDetail';
import PostContent from '../components/PostContent';
import PostLike from '../components/PostLike';
import OtherPostNavigation from '../components/OtherPostNavigation';
import CommentBlock from '../components/CommentBlock';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

const PostDetailPage = () => {
  const { postId } = useParams();
  const { data, error } = usePostDetail(Number(postId));
  const scrollToTop = () => document.querySelector('body')?.scrollTo(0, 0);

  useEffect(() => {
    scrollToTop();
    if (error) throw error;
  })

  return (
    <Container>
      <PostContent post={data} />
      <PostLike postId={data.id} />
      <OtherPostNavigation postId={data.id} />
      <CommentBlock comments={data.comments} />
    </Container>
  );
};

export default PostDetailPage;
