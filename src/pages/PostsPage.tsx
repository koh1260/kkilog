import styled from 'styled-components';
import PostList from '../components/PostList';
import usePosts from '../hooks/usePosts';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const PostsPage = () => {
  const { data } = usePosts();

  return (
    <Container>
        <PostList posts={data} />
    </Container>
  );
};

export default PostsPage;
