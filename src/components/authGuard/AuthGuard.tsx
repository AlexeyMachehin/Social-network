import { useAppSelector } from '@/hooks/reduxHooks';
import { createPath, Navigate, Outlet, useLocation } from 'react-router-dom';

export default function AuthGuard() {
  const user = useAppSelector(state => state.userReducer.user);
  const location = useLocation();

  if (user) {
    return <Outlet />;
  }

  const path = createPath({
    pathname: 'authorization',
    search: new URLSearchParams({ from: location.pathname }).toString(),
  });

  return <Navigate to={path} />;
}
