import { Link, Outlet } from '@tanstack/react-router';

import logoUrl from '../../assets/images/logo-star-wars.png';
import { GlobalStyles } from '../../styles';
import { Header, Main, Wrapper } from './Layout.styles';

const Layout = () => (
  <Wrapper>
    <GlobalStyles />

    <Header>
      <Link to="/characters">
        <img className="logo" src={logoUrl} alt="Star wars logo" />
      </Link>
    </Header>

    <Main>
      <Outlet />
    </Main>
  </Wrapper>
);

export { Layout };
