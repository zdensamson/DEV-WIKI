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
`