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
  padding: 5rem;
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  height: 100%;

  @media screen and (max-width: 1285px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 0 4rem;
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
