import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import useVideoFeed from "../../hooks/useVideoFeed";

const VideoFeed = () => {
    const filter = useSelector((store) => store.video.filter);
    const videos = useSelector((store) => store.video.videos);

    useVideoFeed(filter);

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((video) => {
                    const videoId = video?.id?.videoId || video?.id;
                    return <VideoCard key={videoId} video={video} />;
                })}
            </div>
        </div>
    );
};

export default VideoFeed;
