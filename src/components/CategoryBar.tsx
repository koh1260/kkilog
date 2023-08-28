import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import api from '../api/api';
import { Category as ICategory } from '../type';
import Category from './Category';


const Container = styled.section`
  /* box-shadow: 5px 0 10px rgba(0, 0, 0, 0.03); */
  @media screen and (max-width: 1285px) {
    display: none;
  }
  position: sticky;
  top: 4rem;
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 100vh;
  padding-right: 20px;
  /* border-right: 0.5px solid lightgray; */
`;

const Content = styled.ul`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CategoryBar = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      const response = await api.getCategoryList();
      const result = response.data;
      setCategories([...result]);
    })();
  }, []);

  return (
    <Container>
      <Content>
        {categories.map((category) => (
          <Category
            key={category.id}
            to={`/blog/category/${category.categoryName}`}
            categoryName={category.categoryName}
            icon={category.icon}
            childrenCategories={category.childCategories}
          />
        ))}
      </Content>
    </Container>
  );
};

export default CategoryBar;
