import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
    query {
        posts {
            _id
            username
            blurb
            skillTag
            postType
         
            createdAt
            reactions {
                _id
                createdAt
                username
                reactionBody
            }
        }
    }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      posts {
        _id
        blurb
        createdAt
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
  }
}
`;