import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/Constants";

const VideoFeed = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const data = await fetch(YOUTUBE_VIDEOS_API);
            const json = await data.json();
            setVideos(json.items);
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };
    console.log(videos);
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((videos) => {
                    return <VideoCard key={videos.id} video={videos} />;
                })}
            </div>
        </div>
    );
};

export default VideoFeed;
