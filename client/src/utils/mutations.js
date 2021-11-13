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