import { styled } from 'styled-components';
import { categorys } from '../data/mockData';
import Category from './Category';

const Container = styled.section`
  @media screen and (max-width: 1285px) {
    display: none;
  }
  position: sticky;
  top: 4rem;
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 100vh;
  padding-right: 20px;
  border-right: 0.5px solid black;
`;

const Content = styled.ul`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CategoryBar = () => (
    <Container>
      <Content>
        {categorys.map((category) => (
          <Category
            key={category.id}
            to={`/category/${category.id}`}
            categoryName={category.categoryName}
            icon={category.icon}
          />
        ))}
      </Content>
    </Container>
  )

export default CategoryBar;
