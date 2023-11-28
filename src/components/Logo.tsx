import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled(NavLink)`
  display: flex;
  gap: 7px;
  align-items: center;
  width: fit-content;
`;

const Icon = styled.img`
  height: 2.5rem;
`

const Logo = () => (
    <Container to="/">
      <Icon src="https://haesungsbucket.s3.ap-northeast-2.amazonaws.com/kkilog/logo.png" />
    </Container>
  )

export default Logo;
