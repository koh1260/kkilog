import { styled } from "styled-components";

interface CategoryProps {
  categoryName: string;
  icon: string;
}

const Container = styled.li`
  padding: 0.5rem 0;
  margin-bottom: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 7px;
  &:hover {
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

const Category = ({ categoryName, icon }: CategoryProps) => {
  return (
    <Container>
      <Icon src={icon} />
      <CategoryName>{categoryName}</CategoryName>
    </Container>
  );
};

export default Category;
