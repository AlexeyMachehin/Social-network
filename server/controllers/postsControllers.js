/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const Users = require('../models/userSchema');

const getPosts = async (req, res) => {
  try {
    const user = await Users.findOne({ id: req.params.userId });
    const posts = user.posts;
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: 'Could not get a list of posts',
    });
  }
};

const createPost = async (req, res) => {
  try {
    const res = await Users.findOneAndUpdate(
      { id: req.params.userId },
      { $push: { "posts.$": req.body } },
    );
    res.end(JSON.stringify({}));
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create a user',
    });
  }
};

module.exports = {
  getPosts,
  createPost,
};
