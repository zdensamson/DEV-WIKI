import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

function Request() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
 // console.log(posts);
  return (
    <div className='pull'>
      <PostForm />
      {loading ? (<div>Loading...</div>) : (<PostList posts={posts}/>)}
    </div>
  );
}

export default Request;
