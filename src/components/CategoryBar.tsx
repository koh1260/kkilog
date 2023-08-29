import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import api from '../api/api';
import { Category as ICategory } from '../type';
import Category from './Category';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setIsVisible } from '../redux/slice/category-slice';

interface ContainerProps {
  $isActive: boolean;
}

const Container = styled.section<ContainerProps>`
  /* box-shadow: 5px 0 10px rgba(0, 0, 0, 0.03); */
  position: sticky;
  top: 4rem;
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 100vh;
  margin-left: 20px;
  padding-right: 20px;
  /* border-right: 0.5px solid lightgray; */

  @media screen and (max-width: 1285px) {
    position: absolute;
    flex-direction: row;
    justify-content: center;
    z-index: 10;
    height: fit-content;
    width: 100%;
    padding: 0 24px;
    margin-left: 0px;
    top: 4.3rem;
    pointer-events: ${(props) => props.$isActive ? 'auto' : 'none'};
    opacity: ${(props) => props.$isActive ? 1 : 0 };
    transform: ${(props) => props.$isActive ? 'translateY(-0.3rem)' : 'translateY(0.3rem)'};
    transition: transform ease-in-out 0.2s;
  }
`;

const Content = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1285px) {
    padding: 1rem 3rem;
    min-width: fit-content;
    border-radius: 12px;
    overflow: hidden;
    width: 920px;
    box-shadow: 0 0 10px 1px rgba(0,0,0,0.05);
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const CategoryBar = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const isVisible = useAppSelector((state) => state.category.isVisible);
  const dispatch = useAppDispatch();
  // const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await api.getCategoryList();
      const result = response.data;
      setCategories([...result]);
    })();
  }, []);

  return (
    <Container 
      onMouseEnter={() => isVisible && dispatch(setIsVisible({ isVisible: true }))}
      onMouseLeave={() => dispatch(setIsVisible({ isVisible: false }))}
      $isActive={isVisible}>
      <Content>
        <Category key={0} to='/blog' end categoryName='전체 글' icon='https://cdn-icons-png.flaticon.com/128/1950/1950715.png' childrenCategories={[]} />
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
