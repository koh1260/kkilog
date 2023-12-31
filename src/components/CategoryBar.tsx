import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import api from '../api/api';
import { Category as ICategory } from '../type';
import Category from './Category';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { hideCategory, showCategory } from '../redux/slice/category-slice';

interface ContainerProps {
  $isActive: boolean;
}

const Container = styled.section<ContainerProps>`
  position: sticky;
  top: 4rem;
  display: flex;
  flex-direction: column;
  min-width: 12rem;
  height: fit-content;
  margin-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 1285px) {
    position: fixed;
    flex-direction: row;
    justify-content: center;
    z-index: 10;
    height: fit-content;
    width: 100%;
    padding: 0 24px;
    margin-left: 0px;
    top: 4.3rem;
    pointer-events: ${(props) => (props.$isActive ? 'auto' : 'none')};
    opacity: ${(props) => (props.$isActive ? 1 : 0)};
    transform: ${(props) =>
      props.$isActive ? 'translateY(-0.3rem)' : 'translateY(0.3rem)'};
    transition: transform ease-in-out 0.2s;
  }
`;

const Content = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media screen and (max-width: 1285px) {
    padding: 1rem 3rem;
    min-width: fit-content;
    border-radius: 12px;
    overflow: hidden;
    width: 920px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const Tag = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const ElephantEmoji = styled.span`
  font-size: 1.3rem;
  font-family: 'Noto Color Emoji', sans-serif;
`;

const CategoryBar = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const isVisible = useAppSelector((state) => state.category.isVisible);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const response = await api.getCategoryList();
      setCategories([...response.result!]);
    })();
  }, []);

  return (
    <Container
      onMouseEnter={() => isVisible && dispatch(showCategory())}
      onMouseLeave={() => dispatch(hideCategory())}
      $isActive={isVisible}
    >
      <Content>
        <Tag>
          <ElephantEmoji>🐘</ElephantEmoji>
          Tags
        </Tag>
        <Category
          key={0}
          to='/blog'
          end
          categoryName='All Posts'
          icon='https://cdn-icons-png.flaticon.com/128/1950/1950715.png'
          isChild={false}
        />
        {categories.map((category) => (
          <Category
            key={category.id}
            to={`/blog/category/${category.categoryName}`}
            categoryName={category.categoryName}
            icon={category.icon}
            childrenCategories={category.childCategories}
            isChild={false}
          />
        ))}
      </Content>
    </Container>
  );
};

export default CategoryBar;
