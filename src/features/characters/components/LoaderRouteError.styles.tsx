import styled from 'styled-components';

const Wrapper = styled.div`
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

export { Wrapper };
