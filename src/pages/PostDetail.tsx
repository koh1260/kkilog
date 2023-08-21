import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import CategoryBar from '../components/CategoryBar';
import Footer from '../components/Footer';
import Detail from '../components/Detail';
import { Post } from '../type';
import BodyContainer from '../components/BodyContainer';
import api from '../api/api';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 1;
`;

const BodyBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const PostDetail = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState<Post>();
  const postId: string = useParams()?.postId!;

  useEffect(() => {
    (async () => {
      try {
        const response = await api.getPost(+postId);
        setPost(response.data.result);
      } catch (e) {
        console.log(e);
        setError(true);
      }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <Container>
      <NavBar />
      <BodyContainer>
        <BodyBlock>
          <CategoryBar />
          <Main>
            <Detail post={post!} />
          </Main>
        </BodyBlock>
      </BodyContainer>
      <Footer />
    </Container>
  );
}

export default PostDetail;
