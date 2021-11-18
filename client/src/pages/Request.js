import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import Auth from '../utils/auth';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

function Request() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
 // console.log(posts);
  return (
    <div className='post-grid'>
      <div className='pull container pt-3'>
        {Auth.loggedIn() ? (<PostForm />) : (<></>)}
        
        {loading ? (<div>Loading...</div>) : (<PostList posts={posts}/>)}
      </div>
    </div>
  );
}

export default Request;
