import { IUser } from '@/types/user';
import { useAppDispatch } from './reduxHooks';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { setUser } from '@/store/slices/userSlice';
import { setIsLoaderOff, setIsLoaderOn } from '@/store/slices/loaderSlice';
import { userService } from '@/services/userService';

export function useAuth() {
  const dispatch = useAppDispatch();
  const auth = getAuth();

  useEffect(() => {
    dispatch(setIsLoaderOn());
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      // const [name, surname] = user.displayName ? user.displayName.split(' ') : ['', ''];

      if (user) {
        console.log(user)
        userService.getUser(user.uid).then((userProfile: IUser) => {
          dispatch(setUser(userProfile));
        });
      }
      dispatch(setIsLoaderOff());
    });

    return unsubscribe;
  }, [auth]);
}
