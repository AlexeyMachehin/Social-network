import { useAppDispatch } from './reduxHooks';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { setUser } from '@/store/slices/userSlice';

export function useAuth() {
  const dispatch = useAppDispatch();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      dispatch(setUser(user));
    });

    return unsubscribe;
  }, [auth]);
}
