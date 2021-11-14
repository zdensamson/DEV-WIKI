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