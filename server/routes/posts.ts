import { Router } from 'express';
import { getPosts, createPost } from '../controllers/postsControllers';

export const router = Router();

router.get('/:userId', getPosts);
router.post('/:userId', createPost);
