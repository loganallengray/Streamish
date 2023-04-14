import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const Video = ({ video }) => {
    return (
        <Card>
            <p className="text-left px-2">Posted by: {
                <Link to={`/users/${video.userProfileId}`}>
                    <strong>{video.userProfile.name}</strong>
                </Link>}</p>
            <CardBody>
                <iframe className="video"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />

                <p>
                    <Link to={`/videos/${video.id}`}>
                        <strong>{video.title}</strong>
                    </Link>
                </p>
                <p>{video.description}</p>
                <div>
                    {video.comments.map(comment => (
                        <p key={comment.id}>{comment.message}</p>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
};

export default Video;