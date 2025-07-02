import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

const RedirectToHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({
      to: '/characters',
    });
  }, []);

  return null;
};

export { RedirectToHome };
