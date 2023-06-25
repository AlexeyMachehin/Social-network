import { Router } from 'express';
import {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} from '../controllers/usersControllers.js';

export const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUserById);
usersRouter.post('/', createUser);
usersRouter.delete('/:id', deleteUser);
usersRouter.put('/:id', updateUser);
