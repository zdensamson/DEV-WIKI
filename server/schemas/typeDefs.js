// import the gql template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        posts: [Post]
    }

      
    type Post {
        _id: ID
        postType: Boolean
        skillTag: String
        blurb: String
        username: String
        resolved: Boolean
        reactions: [Reaction]
        budget: Int
        createdAt: String
    }

    type Reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
    }

    type Auth {
        token:ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(_id: ID!): Post
        reaction(_id:ID!): Reaction
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPost(postType: Boolean!, skillTag: String!, blurb: String!): Post
        addReaction(postId: ID!, reactionBody: String!): Post
        removePost(postId: ID!): Post
        removeReaction(reactionId: ID!, postId:ID!): Post
    }
`
module.exports = typeDefs;

// addPost(blurb: String!): Post
//addReaction(postId: ID!, reactionBody: String!): Post