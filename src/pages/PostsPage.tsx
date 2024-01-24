import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostList from '../components/PostList';
import { PreviewPostData } from '../type';
import api from '../api/api';
import Loading from '../components/Loading';
import ClientExcepction from '../common/exceptions/client-exception';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const PostsPage = () => {
  const { categoryName } = useParams<'categoryName'>();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PreviewPostData[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    (async () => {
      let response = null;

      try {
        if (categoryName) {
          response = await api.getPostListByCategoryName(categoryName);
        } else {
          response = await api.getPostList();
        }
        setPosts([...response]);
        setLoading(false);
      } catch (e) {
        if (e instanceof ClientExcepction) {
          console.error(e.stack);
        } else if (e instanceof Error) {
          console.error(e.stack);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <PostList categoryName={categoryName} posts={posts} />
      )}
    </Container>
  );
};

export default PostsPage;
