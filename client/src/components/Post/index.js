import * as React from 'react';
import { styled } from '@mui/material/styles';
// base functionality start
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// base functionality end
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

import ReactionList from '../ReactionList/index';
import Auth from '../../utils/auth';
import { REMOVE_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';
import { useMutation } from '@apollo/client';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function PostCard({ post }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // console.log(post);

  const [removePost, { error }] = useMutation(REMOVE_POST, {
    update(cache, { data: { removePost } }) {
        try {
            const { posts } = cache.readQuery({ query: QUERY_POSTS });
            cache.writeQuery({
                query: QUERY_POSTS,
                data: { posts: [removePost, ...posts] }
            });
        } catch (e) {
            console.error(e)
        }
    }
});

const handlePostDelete = async event => {
  console.log(event.target.getAttribute("value"), 2);
  const id = event.target.getAttribute("value");

  try{

    await removePost({
      variables: {postId: id}
      
    })
  } catch(error){
    console.error(error);
  }
}


  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/post/${post._id}`}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {post.username.charAt(0)}
            </Avatar>
          }
          title={`${post.skillTag}  Help Wanted `}
          subheader={`${post.createdAt}`}
        />
      </Link>
      {/* IMAGE GOES BELOW */}
      <CardMedia
        component="img"
      // height="194"
      // image="/static/images/cards/paella.jpg"
      // alt="Paella dish"
      />
      <CardContent>

        <Typography variant="body2" color="text.secondary">
          {post.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.blurb}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {Auth.loggedIn() ? (
          Auth.getProfile().data.username === post.username ?
            (
              <IconButton aria-label="delete post" value={post._id} onClick={handlePostDelete}>
                <DeleteIcon />
              </IconButton>
            ) :
            (<></>)
        ) : (<></>)}



        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {post.reactions.length ? (
          <CardContent>

            <ReactionList reactions={post.reactions} ></ReactionList>




            {/* <Typography paragraph>Method:</Typography>



            <Typography paragraph>
              p1
            </Typography> */}
          </CardContent>
        ) : (<div> No Reactions </div>)}
      </Collapse>

    </Card>



  );
}