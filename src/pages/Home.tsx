import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import CategoryBar from '../components/CategoryBar';
import PostList from '../components/PostList';
import { PostPreview } from '../type';
import api from '../api/api';
import Loading from '../components/Loading';
import ClientExcepction from '../common/exceptions/client-exception';
import Footer from '../components/Footer';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  flex: 1;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1285px) {
    flex-direction: column;
  }
`;

const PostListBlock = styled.div`
  flex: 1;
  padding: 4rem 2rem;
`;

const Home = () => {
  const { categoryName } = useParams<'categoryName'>();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostPreview[]>([]);

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
    <Container>
      <NavBar />
      <Body>
        <ContentBlock>
          <CategoryBar />
          <PostListBlock>
            <PostList categoryName='Total' posts={posts} />
          </PostListBlock>
        </ContentBlock>
      </Body>
      <Footer />
    </Container>
  );
};

export default Home;
