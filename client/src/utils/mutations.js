import { gql } from '@apollo/client';

export const ADD_POST = gql`
mutation addPost($postType: Boolean!, $skillTag: String!, $blurb: String!) {
    addPost(postType:$postType, skillTag: $skillTag, blurb:$blurb) {
      _id
      postType
      createdAt
      username
      skillTag
      blurb
      reactions {
        _id
      }
    }
    }
    `;

  export const ADD_REACTION = gql`
  mutation addReaction($postId: ID!, $reactionBody: String!) {
    addReaction(postId: $postId, reactionBody: $reactionBody) {
      _id
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
}
    `;

export const REMOVE_POST = gql`
mutation removePost($postId:ID!){
  removePost(postId: $postId){
    _id
  }
}
`;

export const REMOVE_REACTION = gql `
mutation removeReaction($reactionId:ID!, $postId:ID!){
  removeReaction(reactionId: $reactionId, postId:$postId){
    _id
  }
}
`