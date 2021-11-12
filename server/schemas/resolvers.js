const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
//const { post } = require('../models/Reactions');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('posts')


        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // get ALL users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('posts')
    },
    // get a SINGLE user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('posts');
    },
    // get ALL posts
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    // get SINGL post by ID
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    }

  },


  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw new AuthenticationError('Wrong credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Wrong credentials')
      }
      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({ ...args, username: context.user.username })

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        )
        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addReaction: async (parent, { postId, reactionBody }, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );
        return updatedPost;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }

};

module.exports = resolvers;

/*

LOG IN

mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }

--variable:
{
  "password":"1234567",
  "email": "tester1@gmail.com"
}

ADD USER

mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    token
    user{
    _id
    username
    email
    }
  }
}

--variable:
{
  "username":"tester1",
  "password":"1234567",
  "email": "tester1@gmail.com"
}


Query One User

query {
  # get a single user by username (use a username from your database)
  user(username: "test1234") {
    username
    email
    posts {
      blurb
    }
  }
}


*/
