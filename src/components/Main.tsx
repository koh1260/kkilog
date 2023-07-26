import { styled } from "styled-components";
interface MainProps {
  children: JSX.Element;
}

const Container = styled.main`
  margin: 4rem 0;
  display: flex;
  justify-content: center;
  height: 100%;
  flex: 1;
`;

const PositionCenterBox = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

const Main = ({children}: MainProps) => {
  return (
    <Container>
      <PositionCenterBox>
        {children}
      </PositionCenterBox>
    </Container>
  );
};

export default Main;
