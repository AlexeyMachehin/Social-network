/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const Product = require('../models/userSchema');

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
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: 'Could not get a list of users',
    });
  }
};

const getUser = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    req.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      message: 'User not found',
    });
  }
};

const createUser = async (req, res) => {
  const errors = {};

  if (!req.body.id) {
    errors.id = { message: 'Enter ID' };
  }

  if (!req.body.email) {
    errors.email = { message: 'Enter Email' };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const { id, email } = req.body;

    const product = await Product.create({
      id,
      email,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create a user',
    });
  }
};

const updateUser = async (req, res) => {
  const errors = {};

  if (!req.body.id) {
    errors.name = { message: 'Enter ID' };
  }

  if (!req.body.email) {
    errors.manufacturer = { message: 'Enter Email' };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const { id, email } = req.body;

    const product = await Product.findByIdAndUpdate(req.params.id, {
      id,
      email,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update user data',
    });
  }
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
};
