import React from "react";
import Video from "../components/Content/Watch/Video";
import VideoFeed from "../components/Content/VideoFeed";
import Comment from "../components/Content/Watch/Comment";

const Watch = () => {
    return (
        <div className="p-6">
            <div className="flex items-center justify-between py-3">
                <Video />
                <VideoFeed />
            </div>
            <div className="w-full lg:max-w-md xl:max-w-lg">
                <Comment />
            </div>
        </div>
    );
};

export default Watch;
