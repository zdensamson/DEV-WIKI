import React from "react";


import { Grid } from '@mui/material';
import PostCard from "../Post";

const PostList = ({ posts }) => {
    return (
        <div className = ""> 
            <Grid container spacing={1} className='post-grid'>
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