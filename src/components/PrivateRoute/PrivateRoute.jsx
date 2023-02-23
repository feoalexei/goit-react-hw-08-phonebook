import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selector';

export const PrivateRoute = () => {
  const hasToken = useSelector(selectToken);
  return hasToken ? <Outlet /> : <Navigate to={'/login'} />;
};
