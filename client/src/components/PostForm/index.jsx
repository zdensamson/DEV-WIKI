import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

const PostForm = () => {

    // const [formState, setFormState] = useState({ postType: true, skillTag: 'full stack', blurb: '' });
    const [characterCount, setCharacterCount] = useState(0);

    const [postTypeState, setPostTypeState] = useState({ postType: true });
    const [skillTagState, setSkillTagState] = useState({ skillTag: 'Full Stack' });
    const [blurbState, setBlurbState] = useState({ blurb: '' });

    const handleTypeChange = event => {
        setPostTypeState(event.target.value);
        console.log(event.target.value)
    }
    const handleTagChange = event => {
        setSkillTagState(event.target.value);
        console.log(event.target.value)
    }
    const handleBlurbChange = event => {
            setBlurbState(event.target.value);
            console.log(event.target.value)
    }

    const [addPost, { error }] = useMutation(ADD_POST);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            console.log(postTypeState)
            console.log(skillTagState)
            console.log(blurbState)
            // const { data } = 
            await addPost({
                variables: { postType: postTypeState, skillTag: skillTagState, blurb: blurbState }
            })
        } catch (error) {

            console.error(error);
        }

        // try {
        //     // add thought to database
        //     await addPost({
        //         variables: { blurb }
        //     });

        //     // clear form value
        //     setText('');
        //     setCharacterCount(0);
        // } catch (e) {
        //     console.error(e);
        // }
    };


    return (
        <div>
            {/* <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {error && <span className="ml-2">Something went wrong...</span>}
            </p> */}
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                {/* post type */}
                <select onChange={handleTypeChange}>
                    <option value={true}>Push</option>
                    <option value={false}>Pull</option>
                </select>

                {/* skill tag */}
                <select onChange={handleTagChange}>
                    <option value='Front End'>Front End</option>
                    <option value='Back End'>Back End</option>
                    <option value='Full Stack'>Full Stack</option>
                </select>
                <textarea
                    placeholder="blurb your needs..."
                    value={blurbState}
                    className="form-input col-12 col-md-9"
                    onChange={handleBlurbChange}
                ></textarea>
                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PostForm;