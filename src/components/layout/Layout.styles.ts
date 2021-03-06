import styled from 'styled-components';
import bckImageUrl from '../../assets/images/background_star_wars.jpg';

const Wrapper = styled.div`
  background: url(${bckImageUrl});
  display: grid;
  background-size: cover;
  grid-template-rows: 200px auto;
  grid-template-columns: 100%;
  grid-template-areas:
    'header'
    'main';
  min-height: 100vh;

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    grid-template-rows: 150px auto;
    padding: 0;
  }
`;

const Header = styled.header`
  align-items: center;
  display: flex;
  grid-area: header;
  justify-content: center;
  width: auto;
  padding: ${(props) => props.theme.spacing.sm};

  .logo {
    height: 200px;
    width: auto;
  }

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    height: 150px;
    padding: 0;

    .logo {
      height: 150px;
    }
  }
`;

const Main = styled.main`
  grid-area: main;
  padding: ${(props) => props.theme.spacing.md};

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    padding: ${(props) => props.theme.spacing.xxs} 0;
  }
`;

export { Wrapper, Header, Main };
