import { styled } from 'styled-components';

interface BodyContainerProps {
  children: JSX.Element;
}

const Container = styled.section`
  height: 100%;
  width: 100%;
`;

const BodyContainer = ({ children }: BodyContainerProps) => <Container>{children}</Container>;

export default BodyContainer;
