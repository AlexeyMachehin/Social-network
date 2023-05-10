import { useAppDispatch } from './reduxHooks';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { setUser } from '@/store/slices/userSlice';
import { setIsLoaderOff, setIsLoaderOn } from '@/store/slices/loaderSlice';

export function useAuth() {
  const dispatch = useAppDispatch();
  const auth = getAuth();

  useEffect(() => {
    dispatch(setIsLoaderOn());
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      // const [name, surname] = user.displayName ? user.displayName.split(' ') : ['', ''];

      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            photoURL: user.photoURL,
            name: 'alex',
            surname: 'ivanov',
            age: '23',
            city: 'moscow',
            university: 'urgeu',
            posts: [
              { id: user.uid, message: 'Hello from alex', likes: 12 },
              { id: user.uid, message: 'Hello from vasya', likes: 6554 },
            ],
            friends: [
              {
                email: 'fff@mail.ru',
                name: 'alfffex',
                surname: 'machfffehin',
                age: '30',
                city: 'ff',
                university: 'f',
                id: 'qwerty12345',
              },
              {
                email: 'sdf@mail.ru',
                name: 'sdf',
                surname: 'sdf',
                age: '354',
                city: 'mosdfscow',
                university: 'urfsdfu',
                id: 'zxcv12345',
              },
            ],
          }),
        );
      }
      dispatch(setIsLoaderOff());
    });

    return unsubscribe;
  }, [auth]);
}
