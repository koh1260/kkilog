import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Detail from '../components/Detail';
import { Post } from '../type';
import api from '../api/api';
import Loading from '../components/Loading';
import ClientExcepction from '../common/exceptions/client-exception';
import BlogLayout from '../layout/BlogLayout';

const PostDetail = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState<Post>();
  const postId: string = useParams()?.postId!;

  useEffect(() => {
    (async () => {
      try {
        const response = await api.getPost(+postId);

        if (response.statusCode === 200) 
          setPost(response.result!);
      } catch (e) {
        if (e instanceof ClientExcepction) {
          console.error(`Client Error: ${e.stack}`);
        }
        else if (e instanceof Error) {
          console.error(`Error: ${e.stack}`);
        }
        setError(true);
      }
      setLoading(false);
      document.querySelector('body')?.scrollTo(0,0);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  if (error) return <div>Error...</div>;

  return (
    <BlogLayout>
      {loading ? <Loading /> : <Detail post={post!} />}
    </BlogLayout>
  );
}

export default PostDetail;
