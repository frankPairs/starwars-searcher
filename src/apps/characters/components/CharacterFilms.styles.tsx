import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
`;

const Header = styled.div`
  .title {
    color: ${(props) => props.theme.colors.gray4};
    font-size: ${(props) => props.theme.fontSize.lg};
    padding-bottom: ${(props) => props.theme.spacing.xs};
    margin-bottom: ${(props) => props.theme.spacing.xs};
    border-bottom: 1px solid ${(props) => props.theme.colors.gray3};
  }
`;

const Film = styled.li`
  margin-bottom: ${(props) => props.theme.spacing.md};

  .title {
    color: ${(props) => props.theme.colors.gray4};
    font-size: ${(props) => props.theme.fontSize.xs};
    margin-bottom: ${(props) => props.theme.spacing.xxs};
  }

  .opening {
    line-height: ${(props) => props.theme.spacing.xs};
    color: ${(props) => props.theme.colors.gray3};
    font-size: ${(props) => props.theme.fontSize.xxs};
  }
`;

export { Wrapper, Header, Film };
