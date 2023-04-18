import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, searchVideos } from "../modules/videoManager";

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        searchVideos(searchTerm).then(videos => setVideos(videos));
    }

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <>
            <div className="search-container m-2">
                <form onSubmit={(event) => handleSearchSubmit(event)}>
                    <input
                        id="search-value"
                        className="me-2"
                        type="text"
                        onChange={(event) => setSearchTerm(event.target.value)} />
                    <input
                        id="search-submit"
                        type="submit"
                        value="Search" />
                </form>
            </div>
            <div className="container mb-1">
                <div className="row justify-content-center">
                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default VideoList;