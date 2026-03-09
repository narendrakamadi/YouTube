import { useSearchParams } from "react-router-dom";
import Video from "../components/Content/Watch/Video";
import Comment from "../components/Content/Watch/Comment";
import RecomendedVideos from "../components/Content/Watch/RecomendedVideos";

const Watch = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");

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
                    <Comment />
                </div>
            </div>
        </div>
    );
};

export default Watch;
