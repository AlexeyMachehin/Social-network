/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express');
const router = express.Router();
const { getPosts, createPost } = require('../controllers/postsControllers');

router.get('/:userId', getPosts);
router.post('/:userId', createPost);

module.exports = router;
