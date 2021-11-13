import React from "react";
import { Link } from 'react-router-dom';

import { Grid, Paper } from '@mui/material';
import PostCard from "../Post";

const PostList = ({ posts }) => {
    return (
        <div> 
            <Grid container spacing={1}>
                {/* <PostCard/> */}
                {posts &&
                    posts.map(post => (
                        <Grid item xs={12} sm={6} md={3} key={post._id}>
                            {/* <Paper>
                                {post.username}
                            </Paper> */}
                             <PostCard post={post} /> 
                           
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default PostList;