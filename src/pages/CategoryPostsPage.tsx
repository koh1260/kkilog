import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import PostList from '../components/PostList';
import usePostsInCategory from '../hooks/usePostsInCategory';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const CategoryPostsPage = () => {
  const { categoryName } = useParams();
  const { data } = usePostsInCategory(categoryName!);

  return (
    <Container>
      <PostList categoryName={categoryName} posts={data} />
    </Container>
  );
};

export default CategoryPostsPage;
