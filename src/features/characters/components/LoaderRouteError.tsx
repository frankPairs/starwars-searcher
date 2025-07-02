import { Wrapper } from './LoaderRouteError.styles';

interface Props {
  errorMessage: string;
}

const LoaderRouteError = ({ errorMessage }: Props) => {
  return (
    <Wrapper>
      <p>{errorMessage}</p>
    </Wrapper>
  );
};

export { LoaderRouteError };
