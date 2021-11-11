const faker = require('faker');

const db = require('../config/connection');
const { Post, User } = require('../models');

const skillTagsArr = [ 'Full Stack', 'Front End', 'Back End'];

db.once('open', async () => {
  await Post.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);
  console.log(userData);

<<<<<<< HEAD

  // // create Posts
  // let createdPosts = [];
  // for (let i = 0; i < 100; i += 1) {
  //   const postType = Math.round(Math.random());
  //   const skillTag = skillTagsArr[Math.floor(Math.random()*skillTagsArr.length)];
  //   const blurb = faker.lorem.words(Math.round(Math.random() * 20) + 1);
  //   const resolved = Math.round(Math.random());
=======
/*
  // create Posts
  let createdPosts = [];
  for (let i = 0; i < 100; i += 1) {
    const postType = Math.round(Math.random());
    const skillTag = skillTagsArr[Math.floor(Math.random()*skillTagsArr.length)];
    const blurb = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const resolved = Math.round(Math.random());
>>>>>>> 2b308173f4dd3f6abff74486c8a26035f484c1c3
   

  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { username, _id: userId } = createdUsers.ops[randomUserIndex];

  //   const createdPost = await Post.create({ postType, skillTag, blurb, username, resolved });

  //   const updatedUser = await User.updateOne(
  //     { _id: userId },
  //     { $push: { posts: createdPost._id } }
  //   );

  //   createdPosts.push(createdPost);
  // }

  // // create reactions
  // for (let i = 0; i < 100; i += 1) {
  //   const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { username } = createdUsers.ops[randomUserIndex];

  //   const randomPostIndex = Math.floor(Math.random() * createdPosts.length);
  //   const { _id: postId } = createdPosts[randomPostIndex];

  //   await Post.updateOne(
  //     { _id: postId },
  //     { $push: { reactions: { reactionBody, username } } },
  //     { runValidators: true }
  //   );
  // }

<<<<<<< HEAD
  // console.log('all done!');
  // process.exit(0);
=======
  */

  console.log('all done!');
  process.exit(0);
>>>>>>> 2b308173f4dd3f6abff74486c8a26035f484c1c3
});
