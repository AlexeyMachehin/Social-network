import { IPost } from './post';

export interface IUser {
  email: string;
  id: string;
  photoURL: string;
  name: string;
  surname: string;
  age: string;
  city: string;
  university: string;
  posts: IPost[] | [];
  friends: IUser[] | [];
}

