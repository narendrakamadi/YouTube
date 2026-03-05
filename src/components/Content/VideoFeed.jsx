import React from "react";
import { videos } from "../../utils/VideoData";
import VideoCard from "./VideoCard";

const VideoFeed = () => {
    return (
        <div className="p-3 sm:p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
};

export default VideoFeed;
