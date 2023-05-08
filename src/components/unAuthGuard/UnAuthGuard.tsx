import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '@/hooks/reduxHooks';
import { selectorUser } from '@/store/selectors';
import { Navigate, Outlet } from 'react-router-dom';
import { RoutePaths } from '@/consts/routes';

export default function UnAuthGuard() {
  const user = useAppSelector(selectorUser);
  const [searchParams] = useSearchParams();

  if (!user) {
    return <Outlet />;
  }

  return <Navigate to={searchParams.get('from') ?? RoutePaths.INDEX} />;
}
