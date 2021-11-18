import React from 'react';
import { Grid, Paper } from '@mui/material';
import Auth from '../../utils/auth';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REMOVE_REACTION } from '../../utils/mutations';





const ReactionList = ({ reactions }) => {

    const [removeReaction, { error }] = useMutation(REMOVE_REACTION);


    const { id: postId } = useParams();
    const handleReactionDelete = async event => {
      
     
      console.log(event.currentTarget.value);
      const reactionId = event.currentTarget.value;
    
      try{
    
        await removeReaction({
          variables: {postId: postId, reactionId: reactionId},
          // optimisticResponse: true,
        //   update(cache) {
        //     try {
        //         const { posts } = cache.readQuery({ query: QUERY_POSTS });
        //         const updatedPosts = posts.filter(t => (t._id !== id));
        //         cache.writeQuery({
        //             query: QUERY_POSTS,
        //             data: { posts: updatedPosts }
        //         });
        //     } catch (e) {
        //         console.error(e)
        //     }
        // }
        })
        
      } catch(error){
        console.error(error);
      }
      window.location.reload(false);
    }

    

    return (
        <Grid container>
            <ul className="list-group list-group-flush">
                {reactions.map(reaction => (
                    <li className="list-group-item card" key={reaction._id}>
                        {/* <Paper key={reaction._id}> {reaction.reactionBody} </Paper> */}
                        {<><span className="fw-bold">{reaction.username}:</span> {reaction.reactionBody}</>}
                        {Auth.loggedIn() ? (
                            Auth.getProfile().data.username === reaction.username ?
                                (
                                    <IconButton aria-label="delete post" value={reaction._id} onClick={handleReactionDelete}>
                                        <DeleteIcon value={reaction._id} />
                                    </IconButton>
                                ) :
                                (<></>)
                        ) : (<></>)}
                        <br></br>
                    </li>

                ))}
            </ul>
        </Grid>
    )
}

export default ReactionList
