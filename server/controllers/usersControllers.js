/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const Users = require('../models/userSchema');

const deleteUser = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.send('OK');
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: 'Could not get a list of users',
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await Users.findOne({ id: req.params.id });
    res.end(JSON.stringify(user));
  } catch (error) {
    res.status(400).json({
      message: 'User not found',
    });
  }
};

const createUser = async (req, res) => {
  try {
    const {
      email,
      name,
      surname,
      age,
      city,
      university,
      id,
      photoURL,
      posts,
      friends,
    } = req.body;

    const user = await Users.create({
      email,
      name,
      surname,
      age,
      city,
      university,
      id,
      photoURL,
      posts,
      friends,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create a user',
      error,
    });
  }
};

const updateUser = async (req, res) => {
  const errors = {};

  if (!req.body) {
    errors.name = { message: 'Enter data' };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const { email, name, surname, city, university, age } = req.body;

    const user = await Users.findOneAndUpdate(
      { id: req.params.id },
      {
        email,
        name,
        surname,
        city,
        university,
        age,
      },
    );

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update user data',
    });
  }
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
};
