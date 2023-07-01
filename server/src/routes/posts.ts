import { createPost, getPosts } from '@/controllers/postsControllers.js';
import { Router } from 'express';


export const postsRouter = Router();

postsRouter.get('/:userId', getPosts);
postsRouter.post('/:userId', createPost);
