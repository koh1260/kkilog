import { styled } from "styled-components";
import { categorys } from "../data/mockData";
import Category from "./Category";

interface CategoryProps {
  categoryName: string;
}

const Container = styled.section`
  width: 14rem;
  height: 100%;
  padding-right: 20px;
  border-right: 0.5px solid black;
`;

const Content = styled.ul`
  display: flex;
  flex-direction: column;
`;

const CategoryBar = () => {
  return (
    <Container>
      <Content>
        {categorys.map((category) => (
          <Category
            key={category.id}
            categoryName={category.categoryName}
            icon={category.icon}
          />
        ))}
      </Content>
    </Container>
  );
};

export default CategoryBar;
