import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import ChildrenCategory from './ChildrenCategory';
import { Category as ICategory } from '../type';

interface CategoryProps {
  to: string;
  categoryName: string;
  icon: string;
  chldrenCategories: ICategory[];
}

const OuterBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(NavLink)`
  padding: 0.5rem 0;
  margin-bottom: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    background-color: #f2f2f2;
  }
  &.active {
    background-color: #f2f2f2;
  }
`;

const Icon = styled.img`
  width: 38px;
  height: 28px;
  padding: 0 5px;
`;

const CategoryName = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  flex: 1;
`;

const ChildrenCategoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = ({
  to,
  categoryName,
  icon,
  chldrenCategories
}: CategoryProps) => (
  <OuterBlock>
    <Container to={to}>
      <Icon src={icon} />
      <CategoryName>{categoryName}</CategoryName>
    </Container>
    <ChildrenCategoryList>
      {chldrenCategories.map((category) => (
        <ChildrenCategory
          key={category.id}
          to={`/category/${category.id}`}
          categoryName={category.categoryName}
          icon={category.icon}
        />
      ))}
    </ChildrenCategoryList>
  </OuterBlock>
);

export default Category;
