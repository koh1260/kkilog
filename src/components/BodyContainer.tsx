import { styled } from 'styled-components';

interface BodyContainerProps {
  children: JSX.Element;
}

const Container = styled.section`
  padding-left: 20px;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 1285px) {
    padding: 0 24px;
  }
`;

const BodyContainer = ({ children }: BodyContainerProps) => <Container>{children}</Container>;

export default BodyContainer;
