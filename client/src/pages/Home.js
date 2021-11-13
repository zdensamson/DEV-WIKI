import React from 'react'
import PostForm from '../PostForm';
// import { Button } from '@mui/material';

import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';


const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    console.log(posts);

    return (
        <div>
            <h1>Dev-Wiki</h1>
            {/* <Button variant="contained">Hello World</Button> */}
            <div>
                <PostForm />
            </div>
        </div>
    )
}

export default Home
