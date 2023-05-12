/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express');
const router = express.Router();
const {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} = require('../controllers/usersControllers');
const path = require('path');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
