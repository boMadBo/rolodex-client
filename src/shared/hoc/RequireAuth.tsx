import { useAppSelector } from '@/shared/hooks/hooks';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const RequireAuth = ({ children }: Props) => {
  const isRememberMe = useAppSelector(state => state.rememberMe.isRememberMe);
  const location = useLocation();

  if (!isRememberMe) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
