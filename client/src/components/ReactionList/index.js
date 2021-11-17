import React from 'react';
import {Grid , Paper} from '@mui/material';





const ReactionList = ({reactions}) => {
    return (
        <Grid container>
            <p>{reactions.length} </p>
            <ul>
            {reactions.map(reaction => (
               <li>
               <Paper key={reaction._id}> {reaction.reactionBody} </Paper>
               <br></br>
               </li>
               
            ))}
            </ul>
        </Grid>
    )
}

export default ReactionList
