import styled from 'styled-components';
import NavBar from '../components/NavBar';
import CategoryBar from '../components/CategoryBar';
import Footer from '../components/Footer';

interface BlogLayoutProps {
  children: JSX.Element;
}

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
  padding: 4rem 1.3rem;
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
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

  @media screen and (max-width: 1285px) {
    width: 100%;
  }
`;

const BlogLayout = ({ children }: BlogLayoutProps) => (
  <Container>
    <NavBar />
    <Body>
      <ContentBlock>
        <CategoryBar />
        <Content>{children}</Content>
      </ContentBlock>
    </Body>
    <Footer />
  </Container>
);

export default BlogLayout;
