import { styled } from "styled-components";
import { categorys } from "../data/mockData";
import Category from "./Category";
import { NavLink } from "react-router-dom";

interface CategoryProps {
  categoryName: string;
}

const Container = styled.section`
  position: sticky;
  top: 4rem;
  display: flex;
  flex-direction: column;
  width: 14rem;
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

const CategoryBar = () => {
  return (
    <Container>
      <Content>
        {categorys.map((category) => (
          <NavLink to={`/category/${category.id}`}>
            <Category
              key={category.id}
              categoryName={category.categoryName}
              icon={category.icon}
            />
          </NavLink>
        ))}
      </Content>
    </Container>
  );
};

export default CategoryBar;
