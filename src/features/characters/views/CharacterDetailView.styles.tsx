import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin: 0 20%;

  @media only screen and (max-width: ${(props) => props.theme.media.smallDesktop}) {
    margin: 0 10%;
  }

  @media only screen and (max-width: ${(props) => props.theme.media.tablet}) {
    margin: 0;
  }
`;

export { Wrapper };
