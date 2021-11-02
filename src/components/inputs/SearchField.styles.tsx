import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  position: relative;

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    padding: ${(props) => props.theme.spacing.xxs};
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border-radius: 24px;
  padding: calc(${(props) => props.theme.spacing.xxs} * 0.7);
  font-size: calc(${(props) => props.theme.fontSize.xs} * 0.8);

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    padding: calc(${(props) => props.theme.spacing.xxs} * 0.5);
    font-size: ${(props) => props.theme.fontSize.xxs};
  }
`;

export { Input, Wrapper };
