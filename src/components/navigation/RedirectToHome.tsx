import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  homePath: string;
}

const RedirectToHome = ({ homePath }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(homePath);
  }, []);

  return null;
};

export { RedirectToHome };
