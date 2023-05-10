/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env node */

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const isDev = process.env.NODE_ENV === 'development';
const path = isDev
  ? 'http://localhost:5173'
  : 'https://social-network-vk.netlify.app';

const port = isDev ? 5000 : process.env.SERVER_PORT;

console.log(`cors include path: ${path}`);

mongoose
  .connect(
    `mongodb+srv://alex:${process.env.MONGO_PASS}@social-network-cluster.jreewt4.mongodb.net/social-network?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`app listens on port: ${port}`);
    });
  });

app.use(
  cors({
    origin: path,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/assets'));
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));

app.get('/', (req, res) => {
  res.send('Database connected');
});
