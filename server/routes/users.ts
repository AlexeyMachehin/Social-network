import { Router } from 'express';
import {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} from '../controllers/usersControllers';

export const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
