import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import ChildrenCategory from './ChildrenCategory';
import { Category as ICategory } from '../type';

interface CategoryProps {
  to: string;
  end?: boolean;
  categoryName: string;
  icon: string;
  childrenCategories: ICategory[];
}

const OuterBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Container = styled(NavLink)`
  color: #848484;
  font-size: 0.85rem;
  font-weight: 500;
  width: 100%;
  height: 2.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background-color: #f6f7f9;
  }
  &.active {
    background-color: #e6f7ff;
    color: black;
    font-weight: 600;
  }

  @media screen and (max-width: 1285px) {
    flex: 1;
    margin-bottom: 1rem;

    &:hover {
      background-color: initial;
      color: #84AAFF;
    }

    &.active {
      background-color: initial;
      color: #4976C6;
      font-weight: 600;
    }
  }
`;

Container.defaultProps = {
  end: false,
}

const Icon = styled.img`
  width: 28px;
  height: 18px;
  padding: 0 5px;

  @media screen and (max-width: 1285px) {
    display: none;
  }
`;

const CategoryName = styled.p`
  flex: 1;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

interface DropdownButtonProps {
  $isActive: boolean;
}

const DropdownButton = styled.button<DropdownButtonProps>`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  width: fit-content;
  height: fit-content;
  transform: ${(props) =>
    props.$isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: 0.3s;
  z-index: 999;

  @media screen and (max-width: 1285px) {
    display: none;
  }
`;

  const DropdownButtonIcon = styled.img`
    width: 1rem;
  `

interface ChildCategoryListProps {
  $isActive: boolean;
}

const ChildrenCategoryList = styled.div<ChildCategoryListProps>`
  display: flex;
  height: 3rem;
  pointer-events: ${(props) => (props.$isActive ? 'auto' : 'none')};
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  height: ${(props) => (props.$isActive ? '3rem' : 0)};
  flex-direction: column;
  transition: height 0.2s ease-in-out, opacity 0.1s ease-in-out;

  @media screen and (max-width: 1285px) {
    pointer-events: auto;
    opacity: 1;
    display: flex;
    height: fit-content;
  }
`;

const Category = ({
  to,
  end = false,
  categoryName,
  icon,
  childrenCategories
}: CategoryProps) => {
  const [childrenVisible, setChildrenVisible] = useState(false);

  return (
    <OuterBlock>
      <Container to={to} end={end}>
        <Icon src={icon} />
        <CategoryName>{categoryName}</CategoryName>
        {childrenCategories.length ? (
          <DropdownButton
            $isActive={childrenVisible}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              if (childrenVisible) setChildrenVisible(false);
              else setChildrenVisible(true);
            }}
          >
            <DropdownButtonIcon alt='dropdown' src='https://haesungsbucket.s3.ap-northeast-2.amazonaws.com/kkilog/dropdown-btn-icon.png' />
          </DropdownButton>
        ) : null}
      </Container>
      {childrenCategories.length ? (
        <ChildrenCategoryList $isActive={childrenVisible}>
          {childrenCategories.map((category) => (
            <ChildrenCategory
              key={category.id}
              to={`/blog/category/${category.categoryName}`}
              categoryName={category.categoryName}
              icon={category.icon}
            />
          ))}
        </ChildrenCategoryList>
      ) : null}
    </OuterBlock>
  );
};

export default Category;
