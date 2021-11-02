import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.gray1};
  padding: ${(props) => props.theme.spacing.lg};
  width: 100%;

  @media only screen and (max-width: ${(props) => props.theme.media.smallDesktop}) {
    padding: ${(props) => props.theme.spacing.md};
  }
`;

const FilmsWrapper = styled.div`
  padding-top: ${(props) => props.theme.spacing.lg};

  @media only screen and (max-width: ${(props) => props.theme.media.smallDesktop}) {
    padding-top: ${(props) => props.theme.spacing.md};
  }
`;

export { Wrapper, FilmsWrapper };
