import { useSearchParams } from "react-router-dom";
import Video from "../components/Content/Watch/Video";
import Comment from "../components/Content/Watch/Comment";
import RecomendedVideos from "../components/Content/Watch/RecomendedVideos";
import VideoOptions from "../components/Content/Watch/VideoOptions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";

const Watch = () => {
    const dispatch = useDispatch();
    const videos = useSelector((store) => store.video.videos);
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");

    useEffect(() => {
        if (videos.length > 0) return;
        const cachedVideos = localStorage.getItem("videos");

        if (cachedVideos) {
            dispatch(addVideos(JSON.parse(cachedVideos)));
        } else {
            // fetchVideosFromAPI();
        }
    });

    return (
        <div className="px-3 py-4 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
                <div className="w-full min-w-0">
                    <Video videoId={videoId} />
                </div>

                <div className="w-full min-w-0 lg:row-span-2">
                    <RecomendedVideos />
                </div>

                <div className="w-full min-w-0">
                    <VideoOptions videoId={videoId} />
                    <Comment />
                </div>
            </div>
        </div>
    );
};

export default Watch;
