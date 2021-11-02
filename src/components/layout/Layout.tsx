import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { GlobalStyles } from '../../styles';
import { Header, Main, Wrapper } from './Layout.styles';
import logoUrl from '../../assets/images/logo-star-wars.png';

const Layout = () => (
  <Wrapper>
    <GlobalStyles />
    <Header>
      <Link to="/">
        <img className="logo" src={logoUrl} alt="Star wars logo" />
      </Link>
    </Header>
    <Main>
      <Outlet />
    </Main>
  </Wrapper>
);

export { Layout };
