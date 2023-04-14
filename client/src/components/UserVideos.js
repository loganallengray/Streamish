import React, { useEffect, useState } from "react";
import UserVideo from './UserVideo';
import { useParams } from "react-router-dom";
import { getUserWithVideos } from "../modules/userProfileManager";

const UserVideos = () => {
    const { id } = useParams();
    const [user, setUser] = useState({
        videos: []
    });

    const getUser = () => {
        getUserWithVideos(id).then(user => setUser(user));
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <h1>{user.name}'s Videos</h1>
            <div className="container">
                <div className="row justify-content-center">
                    {user.videos.map((video) => (
                        <UserVideo video={video} key={video.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default UserVideos;