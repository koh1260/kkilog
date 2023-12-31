import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import { PreviewPost } from '../type';
import api from '../api/api';
import Loading from '../components/Loading';
import ClientExcepction from '../common/exceptions/client-exception';
import BlogLayout from '../layout/BlogLayout';

const Home = () => {
  const { categoryName } = useParams<'categoryName'>();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PreviewPost[]>([]);

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
        setPosts([...response.result!]);
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
    <BlogLayout>
      {loading ? <Loading /> : <PostList categoryName={categoryName} posts={posts} />}
    </BlogLayout>
  );
};

export default Home;
