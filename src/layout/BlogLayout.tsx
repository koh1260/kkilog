import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CategoryBar from '../components/CategoryBar';
import Footer from '../components/Footer';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;

const ContentBlock = styled.div`
  padding: 4rem 1.3rem;
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  height: 100%;

  @media screen and (max-width: 1285px) {
    flex-direction: column;
    padding: 4rem 0;
    align-items: center;
  }
`;

const Content = styled.div`
  padding: 0 1.3rem;
  width: calc(100% - 12rem);
  height: 100%;

  @media screen and (max-width: 1285px) {
    width: 100%;
  }
`;

const BlogLayout = () => (
  <Container>
    <NavBar />
    <Body>
      <ContentBlock>
        <CategoryBar />
        <Content>
          <Outlet />
        </Content>
      </ContentBlock>
    </Body>
    <Footer />
  </Container>
);

export default BlogLayout;
