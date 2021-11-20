import React from 'react';
import { Grid } from '@mui/material';
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

        })
        
      } catch(error){
        console.error(error);
      }
      window.location.reload(false);
    }

    

    return (
        
            <div className = "homeSectionOne">
            <ul className="list-group list-group-flush homeSectionOne">
                {reactions.map(reaction => (
                    <li className="list-group-item card homeSectionOne text-light" key={reaction._id}>
                     
                        {<div><span className="fw-bold">{reaction.username}:</span> {reaction.reactionBody}</div>}
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
            </div>
        
    )
}

export default ReactionList
