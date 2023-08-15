import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import CategoryBar from '../components/CategoryBar';
import Footer from '../components/Footer';
import PostList from '../components/PostList';
import { PostPreview } from '../type';
import BodyContainer from '../components/BodyContainer';
import api from '../api/api';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  flex: 1;
`;

const BodyBlock = styled.div`
  display: flex;
  height: 100%;
`;

const Home = () => {
  const [posts, setPosts] = useState<PostPreview[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.getPostList();
        setPosts([...response.data.result]);
      } catch (e: unknown) {
        console.log(`Error: ${e}`);
      }
    })();
  }, []);

  return (
    <Container>
      <NavBar />
      <BodyContainer>
        <BodyBlock>
          <CategoryBar />
          <Main>
            <PostList categoryName='Total' posts={posts} />
          </Main>
        </BodyBlock>
      </BodyContainer>
      <Footer />
    </Container>
  );
};

export default Home;
