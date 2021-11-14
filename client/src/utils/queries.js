import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
    query {
        posts {
            _id
            username
            blurb
            skillTag
            postType
            resolved
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
      friendCount
      thoughts {
        _id
        thoughtText
        createdAt
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;