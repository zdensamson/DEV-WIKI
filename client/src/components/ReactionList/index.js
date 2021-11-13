import React from 'react';
import {Grid , Paper} from '@mui/material';





const ReactionList = ({reactions}) => {
    return (
        <Grid container>
            <p>{reactions.length} </p>
            {reactions.map(reaction => (
               <Paper > {reaction.reactionBody} </Paper>
            ))}
        </Grid>
    )
}

export default ReactionList
