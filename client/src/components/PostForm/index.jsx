import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS } from '../../utils/queries';

const PostForm = () => {

    // const [formState, setFormState] = useState({ postType: true, skillTag: 'full stack', blurb: '' });
    // const [characterCount, setCharacterCount] = useState(0);

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

