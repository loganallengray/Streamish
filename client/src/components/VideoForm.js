import React, { useState, useNavigate } from "react";
import { addVideo } from "../modules/videoManager";

const VideoForm = () => {
    const navigate = useNavigate;
    const [videoToAdd, setVideoToAdd] = useState({
        title: "",
        description: "",
        url: ""
    });

    const handleChange = (event) => {
        // prevents page reload
        event.preventDefault();

        // gets all user's current choices
        const copy = { ...videoToAdd }
        // targets change that user made
        const value = event.target.value;

        // based upon the name of the input tag, it sets the value to the correct property on the video object
        switch (event.target.name) {
            case "title":
                copy.title = value;
                break;
            case "url":
                copy.url = value;
                break;
            case "description":
                copy.description = value;
                break;
        }

        // saved the change the user made
        setVideoToAdd(copy)
    }

    // runs when the video form is submitted
    const handleSubmit = (event) => {
        // runs the method in videoManager to add the video to the database
        addVideo(videoToAdd).then((p) => {
            // Navigate the user back to the home route
            navigate("/");
        });
    }

    // Returns the HTML form
    return (
        // When the form is submitted, calls the submit method in videoList.js
        // Any time one of the inputs is changed, it will call the handleChange method above
        <form className="m-2" onSubmit={e => handleSubmit(e)} >
            <div className="d-flex flex-column align-items-center">
                <label htmlFor="title">Title</label>
                <input className="w-25" type="text" name="title" value={videoToAdd.title} required onChange={e => handleChange(e)} />
            </div>
            <div className="d-flex flex-column align-items-center">
                <label className="mt-1" htmlFor="description">Description</label>
                <input className="w-25" type="text" name="description" value={videoToAdd.description} onChange={e => handleChange(e)} />
            </div>
            <div className="d-flex flex-column align-items-center">
                <label className="mt-1" htmlFor="url">Url</label>
                <input className="w-25" type="text" name="url" value={videoToAdd.url} required onChange={e => handleChange(e)} />
            </div>

            <input className="mt-2" type="submit" />
        </form>
    );
};

export default VideoForm;