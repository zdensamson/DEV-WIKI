import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

const PostForm = () => {

    // const [formState, setFormState] = useState({ postType: true, skillTag: 'full stack', blurb: '' });
    const [characterCount, setCharacterCount] = useState(0);

    const [postTypeState, setPostTypeState] = useState(true);
    const [skillTagState, setSkillTagState] = useState('Front End');
    const [blurbState, setBlurbState] = useState('');

    const handleTypeChange = event => {
        let updatedValue = event.target.value;
        if (updatedValue === "true") {
            updatedValue = true
        }
        if (updatedValue === "false") {
            updatedValue = false
        }

        setPostTypeState(updatedValue);
        // console.log(event.target.value)
    }
    const handleTagChange = event => {
        setSkillTagState(event.target.value);
        console.log(event.target.value)
    }
    const handleBlurbChange = event => {
        setBlurbState(event.target.value);
        console.log(event.target.value)
    }

    // const [addPost, { error }] = useMutation(ADD_POST);

    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });
                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] }
                });
            } catch (e) {
                console.error(e)
            }
            // const {me} = cache.readQuery({ query: QUERY_ME});
            // cache.writeQuery({
            //     query: QUERY_ME,
            //     data: {me: { ...me, posts: [...me.posts, addPost]}}
            // });
        }
    });


    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            console.log(postTypeState)
            console.log(skillTagState)
            console.log(blurbState)
            // const { data } = 
            await addPost({
                // variables: { postType: postTypeState, skillTag: skillTagState, blurb: blurbState }
                variables: { postType: postTypeState, skillTag: skillTagState, blurb: blurbState }
            })



            setBlurbState('');
        } catch (error) {
            console.log("HELP");
            console.error(error);
        }
    };


    return (
        <div className = " ">
        
          

            <form className="" onSubmit={handleFormSubmit} >
                <div className="card">

                    <div className="card-body">
                        <h5 className="card-title">Create A Request</h5>
                    </div>
                    <div className = "d-flex flex-wrap mb-2">
                        <span className = "my-auto ">I am</span>
                        <select className = "form-control w-100px ml-2" onChange={handleTypeChange}>
                            <option value="true">offering</option>
                            <option value="false">needing</option>
                        </select>
                        <span className = "my-auto "> help with </span>

                        <select className = "form-control w-100px" onChange={handleTagChange}>
                            <option value='Front End'>Front End</option>
                            <option value='Back End'>Back End</option>
                            <option value='Full Stack'>Full Stack</option>
                        </select>
                        <span className = "my-auto"> development</span>
                    </div>
                    <div className="w-90 mx-1" >
                        <textarea className="form-control"  placeholder="blurb your needs..." value={blurbState} onChange={handleBlurbChange} rows="3"></textarea>
                    </div>
                    <div className = "d-flex justify-content-center">
                        <button className="btn btn-secondary my-3 " type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>



        </div>
    );
};

export default PostForm;


  {/* 
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
               
                <div> 
                    <span>I am </span>
                    <select onChange={handleTypeChange}>
                        <option value="true">offering</option>
                        <option value="false">needing</option>
                    </select>
                    <span> help with </span>

                    <select onChange={handleTagChange}>
                        <option value='Front End'>Front End</option>
                        <option value='Back End'>Back End</option>
                        <option value='Full Stack'>Full Stack</option>
                    </select>
                    <span> development</span>
                </div>
              

                <textarea
                    placeholder="blurb your needs..."
                     value={blurbState}
                    className=" col-12 col-md-9 form-control mt-2 w-50"
                    onChange={handleBlurbChange}
                ></textarea> */}


            {/* <input className="form-control col-12 col-md-9 " rows = "5" type = "text" value = {blurbState} onChange={handleBlurbChange}></input> */}


            {/* <button className="btn btn-secondary my-3" type="submit">
                    Submit
                </button>
            </form> */}