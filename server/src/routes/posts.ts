import { getPosts, createPost } from '@/controllers/postsControllers';
import { Router } from 'express';

export const postsRouter = Router();

postsRouter.get('/:userId', getPosts);
postsRouter.post('/:userId', createPost);
