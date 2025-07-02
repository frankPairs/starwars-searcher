import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Overlap = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 600ms ease-in-out;
  padding: ${(props) => props.theme.spacing.md};
  box-sizing: border-box;

  .title {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize.md};
    text-align: center;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const Image = styled.img`
  height: 350px;
  width: 100%;
  object-fit: cover;
`;

const MoreInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-bottom: ${(props) => props.theme.fontSize.md};
  box-sizing: border-box;

  button {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.primary};
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
    padding: ${(props) => props.theme.spacing.xxs};
    transition: color 350ms ease-in-out, background-color 350ms ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.black};
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export { Wrapper, Overlap, Image, MoreInfo };
