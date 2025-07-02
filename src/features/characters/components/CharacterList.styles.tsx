import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-column-gap: ${(props) => props.theme.spacing.sm};
  grid-row-gap: ${(props) => props.theme.spacing.sm};
  grid-template-columns: repeat(4, 1fr);

  @media only screen and (max-width: ${(props) => props.theme.media.smallDesktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: ${(props) => props.theme.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.theme.spacing.md};
`;

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing.xxl};

  p {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize.sm};
    text-align: center;
  }
`;

export { ErrorWrapper, ProgressWrapper, Wrapper };
