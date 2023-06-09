import { createPath, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/hooks/reduxHooks';
import { selectorUser } from '@/store/selectors';

export default function AuthGuard() {
  const user = useAppSelector(selectorUser);
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
