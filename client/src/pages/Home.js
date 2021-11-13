import React from 'react'
import { Button } from '@mui/material';

import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

import PostList from '../components/PostList';

const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    console.log(posts[0]);

    return (
        <div>
            <h1>Dev-Wiki</h1>
            <Button variant="contained">Hello World</Button>
            {loading ? (<div>Loading...</div>) : (<PostList posts={posts}/>)}
        </div>
    )
}

export default Home
