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
  const currentCategory: string = useParams().categoryName || '🦖All Posts';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getPosts = async (name: string | undefined) => {
      try {
        if (name) {
          const response = await api.getPostListByCategoryName(name);
          setPosts([...response.result!]);
        } else {
          const response = await api.getPostList();
          setPosts([...response.result!]);
        }
      } catch (e) {
        if (e instanceof ClientExcepction) {
          console.error(e.stack);
        } else if (e instanceof Error) {
          console.error(e.stack);
        }
      }
    };
    getPosts(categoryName);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  if (loading) return <Loading />;

  return (
    <BlogLayout>
      <PostList categoryName={currentCategory} posts={posts} />
    </BlogLayout>
  );
};

export default Home;
