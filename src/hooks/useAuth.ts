import { useAppDispatch } from './reduxHooks';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { setUser } from '@/store/slices/userSlice';

export function useAuth() {
  const dispatch = useAppDispatch();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            photoURL: user.photoURL,
            token: user.accessToken,
          }),
        );
      }
    });

    return unsubscribe;
  }, [auth]);
}
