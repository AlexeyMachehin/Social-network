import Users from '../models/userSchema.js';

const getPosts = async (req: any, res: any) => {
  try {
    const user = await Users.findOne({ id: req.params.userId });
    const posts = user?.posts;

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: 'Could not get a list of posts',
    });
  }
};

const createPost = async (req: any, res: any) => {
  try {
    await Users.findOneAndUpdate(
      { id: req.params.userId },
      { $push: { 'posts.$': req.body } },
    );

    res.status(200).send({});
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create a user',
    });
  }
};

export { getPosts, createPost };
