import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;

  img {
    height: 250px;
    width: 250px;
    object-fit: cover;
  }

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PersonalInfoWrapper = styled.div`
  margin-left: ${(props) => props.theme.spacing.md};
  width: 100%;

  .header {
    padding-bottom: ${(props) => props.theme.spacing.xs};
    margin-bottom: ${(props) => props.theme.spacing.xs};
    border-bottom: 1px solid ${(props) => props.theme.colors.gray3};
  }

  .title {
    color: ${(props) => props.theme.colors.gray4};
    font-size: ${(props) => props.theme.fontSize.xl};
    margin-bottom: ${(props) => props.theme.spacing.xs};
  }

  .subtitle {
    color: ${(props) => props.theme.colors.gray4};
    font-size: ${(props) => props.theme.fontSize.sm};
    font-weight: 100;
  }

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    margin-top: ${(props) => props.theme.spacing.md};
    flex-direction: column;
  }
`;

const CharacteristicsWrapper = styled.ul`
  list-style: none;

  .row {
    display: flex;
    margin-bottom: ${(props) => props.theme.spacing.xxs};
  }

  .property {
    flex: 2;
    font-size: ${(props) => props.theme.fontSize.xxs};
    color: ${(props) => props.theme.colors.gray4};
    text-transform: uppercase;
  }

  .value {
    flex: 4;
    font-size: ${(props) => props.theme.fontSize.xxs};
    font-weight: 100;
    color: ${(props) => props.theme.colors.gray3};
  }

  @media only screen and (max-width: ${(props) => props.theme.media.smallDesktop}) {
    .property {
      flex: 2;
    }

    .value {
      flex: 2;
    }
  }
`;

export { Wrapper, PersonalInfoWrapper, CharacteristicsWrapper };
