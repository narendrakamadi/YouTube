import VideoCard from "./VideoCard";
import { videos } from "../../utils/VideoData";

const VideoFeed = () => {
    console.log(videos);
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
