import { Router } from 'express';
import { getPosts, createPost } from '../controllers/postsControllers.js';

export const postsRouter = Router();

postsRouter.get('/:userId', getPosts);
postsRouter.post('/:userId', createPost);
