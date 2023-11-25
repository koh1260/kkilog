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

  @media screen and (max-width: 1285px) {
    padding: 0 24px;
  }
`;

const PositionCenterBox = styled.div`
  width: 1300px;
  margin: 0 auto;

  @media screen and (max-width: 1585px) {
    width: 1000px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Main = ({children}: MainProps) => (
    <Container>
      <PositionCenterBox>
        {children}
      </PositionCenterBox>
    </Container>
  )

export default Main;
