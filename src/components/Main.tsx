import { styled } from 'styled-components';

interface MainProps {
  children: JSX.Element;
}

const Container = styled.main`
  margin: 4rem 0;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex: 1;
`;

const PositionCenterBox = styled.div`
  max-width: 980px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  margin: 0 auto;
`;

const Main = ({children}: MainProps) => (
    <Container>
      <PositionCenterBox>
        {children}
      </PositionCenterBox>
    </Container>
  )

export default Main;
