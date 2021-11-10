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
`
module.exports = typeDefs;