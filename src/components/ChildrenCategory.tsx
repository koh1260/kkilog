import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

interface ChildrenCategoryProps {
  to: string;
  categoryName: string;
  icon: string;
}

const Container = styled(NavLink)`
  padding: 0.5rem 21px;
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

  @media screen and (max-width: 1285px) {
    flex: 1;
    padding: 0;

    &:hover {
      background-color: initial;
      color: pink;
    }

    &.active {
      background-color: initial;
      color: red;
    }
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  

  @media screen and (max-width: 1285px) {
    
  }
`;

const CategoryName = styled.p`
  font-size: 0.85rem;
  flex: 1;
`;

const ChildrenCategory = ({ to, categoryName, icon }: ChildrenCategoryProps) => (
  <Container to={to}>
    <Icon src={icon} />
    <CategoryName>{categoryName}</CategoryName>
  </Container>
);

export default ChildrenCategory;
