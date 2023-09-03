import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import logo from '../assets/img/logo.png';

const Container = styled(NavLink)`
  display: flex;
  gap: 7px;
  align-items: center;
  transition: ease-in 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

// const Text = styled.h2`
//   font-weight: 600;
//   cursor: pointer;
// `;

const Icon = styled.img`
  height: 70%;
`

const Logo = () => (
    <Container to="/">
      <Icon src={logo} />
    </Container>
  )

export default Logo;
