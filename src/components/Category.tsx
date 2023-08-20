import { useState } from 'react';
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
    background-color: #F6F7F9;
  }
  &.active {
    background-color: #E6F7FF;
  }
`;

const Icon = styled.img`
  width: 38px;
  height: 28px;
  padding: 0 5px;
`;

const CategoryName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  flex: 1;
`;

interface DropdownButtonProps {
  $isActive: boolean;
}

const DropdownButton = styled.button<DropdownButtonProps>`
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  width: fit-content;
  height: fit-content;
  transform: ${(props) => (props.$isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: 0.3s;
  z-index: 999;
`;

interface ChildCategoryListProps {
  $isActive: boolean;
}

const ChildrenCategoryList = styled.div<ChildCategoryListProps>`
  display: ${(props) => props.$isActive ? 'flex' : 'none'};
  height: ${(props) => props.$isActive ? 'fit-content' : 0};
  flex-direction: column;
  transition: 0.3s ease-in-out;
`;

const Category = ({
  to,
  categoryName,
  icon,
  chldrenCategories
}: CategoryProps) => {
  const [childrenVisible, setChildrenVisible] = useState(false);

  return (
    <OuterBlock>
      <Container to={to}>
        <Icon src={icon} />
        <CategoryName>{categoryName}</CategoryName>
        <DropdownButton $isActive={childrenVisible} onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (childrenVisible) setChildrenVisible(false);
          else setChildrenVisible(true);
        }} >🐘</DropdownButton>
      </Container>
      <ChildrenCategoryList $isActive={childrenVisible}>
        {chldrenCategories.map((category) => (
          <ChildrenCategory
            key={category.id}
            to={`/blog/category/${category.categoryName}`}
            categoryName={category.categoryName}
            icon={category.icon}
          />
        ))}
      </ChildrenCategoryList>
    </OuterBlock>
  );
};

export default Category;
