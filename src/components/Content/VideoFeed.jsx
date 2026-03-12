import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/Constants";
import { useDispatch } from "react-redux";
import { addVideos } from "../../utils/videoSlice";

const VideoFeed = () => {
    const [videos, setVideos] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const getVideos = async () => {
            try {
                const data = await fetch(YOUTUBE_VIDEOS_API);
                const json = await data.json();
                const items = Array.isArray(json?.items) ? json.items : [];
                setVideos(items);
                dispatch(addVideos(items));
                localStorage.setItem("videos", JSON.stringify(items));
            } catch (error) {
                console.error("Error fetching videos:", error);
                setVideos([]);
            }
        };

        getVideos();
    }, [dispatch]);

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((video) => {
                    return <VideoCard key={video.id} video={video} />;
                })}
            </div>
        </div>
    );
};

export default VideoFeed;
