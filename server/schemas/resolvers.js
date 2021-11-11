const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
//const { post } = require('../models/Reactions');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // get ALL users
    users: async() => {
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
      const params = username ?  { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    // get SINGL post by ID
    post: async(parent, {_id}) => {
      return Post.findOne({ _id });
    }
  },


  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
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

      return user;
    }
  }
 
};

module.exports = resolvers;