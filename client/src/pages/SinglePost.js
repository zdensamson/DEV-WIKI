import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

import Auth from '../utils/auth';
import ReactionList from '../components/ReactionList';
import ReactionForm from '../components/ReactionForm';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { REMOVE_POST } from '../utils/mutations';
import { QUERY_POSTS } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import * as IoIcons from 'react-icons/io5';


const SinglePost = props => {

   const { id: postId } = useParams();



  const [removePost, { error }] = useMutation(REMOVE_POST);

  // const handlePostDelete = async event => {
  //   console.log(postId)
  //   try {
  //     await removePost({
  //       variables: { postId: postId }
  //     })
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   window.location.reload(false);
  // }


  const handlePostDelete = async event => {
  
    console.log(event.currentTarget.value);
    const id = event.currentTarget.value;
  
    try{
  
      await removePost({
        variables: {postId: id},
        // optimisticResponse: true,
        update(cache) {
          try {
              const { posts } = cache.readQuery({ query: QUERY_POSTS });
              const updatedPosts = posts.filter(t => (t._id !== id));
              cache.writeQuery({
                  query: QUERY_POSTS,
                  data: { posts: updatedPosts }
              });
          } catch (e) {
              console.error(e)
          }
      }
      })
    } catch(error){
      console.error(error);
    }
  }

  

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId }
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>
  }


  return (
     <div className="reactionbg text-light">
      <div className="row align-items-center">
        <div className="card mb-3 homeSectionOne">
          <p className="card-header sp-header">
            <span style={{ fontWeight: 700 }} className="text-dark">
              <Link to= "/request">
            <IoIcons.IoArrowBack className = "display-6 backbtn" style={{color: 'red'}}></IoIcons.IoArrowBack>
            </Link>
            </span>{' '}
            {     post.postType == true ?
              (<div className = ""><h3><span className="fw-bolder ">{post.username}</span> {' '}wants to help with<span className="fw-bolder">{post.skillTag}</span> dev  </h3> <h4 className="fst-italic">{post.createdAt}</h4></div>) :
              (<div><h3><span className="fw-bolder ">{post.username}</span> {' '}needs <span className="fw-bolder">{post.skillTag}</span> help  </h3> <h4 className="fst-italic">{post.createdAt}</h4></div>)}
          </p>
          
          <div className="card-body ">
            <h4>{post.blurb}</h4>
          </div>
          {post.reactions.length > 0 && <ReactionList reactions={post.reactions} />}
          {Auth.loggedIn() && <ReactionForm postId={post._id} />} 
        </div>

        {/* {post.reactions.length > 0 && <ReactionList reactions={post.reactions} />}
        {Auth.loggedIn() && <ReactionForm postId={post._id} />} */}

        <div >
          <Link to="/request"  onClick={handlePostDelete}>
          {Auth.loggedIn() ? (
            Auth.getProfile().data.username === post.username ?
              (
                <IconButton  aria-label="delete post" value={post._id} onClick={handlePostDelete}>
                  <DeleteIcon  value={post._id}/>
                </IconButton>
              ) :
              (<></>)
          ) : (<></>)}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;