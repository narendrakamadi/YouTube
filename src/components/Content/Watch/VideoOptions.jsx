import { ArrowUpDown } from "lucide-react";
import { useSelector } from "react-redux";
import Description from "./Description";
import { formatViews, timeAgo } from "../../../utils/Helper";

const VideoOptions = ({ videoId }) => {
    const videos = useSelector((store) => store.video.videos);
    const videoInfo = videos.find((item) => item.id === videoId);
    const {
        snippet: {
            channelTitle,
            title,
            description,
            publishedAt,
            thumbnails: { high: { url: channelImg } = {} } = {},
        } = {},
        statistics: { viewCount } = {},
    } = videoInfo || {};

    console.log("VideoInfo: ", videoInfo);

    return (
        <div className="w-full -mt-4 mb-4">
            {/* Title */}
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                {title}
                <span className="text-blue-600 ml-1">#viral</span>
            </h1>

            {/* Channel + Buttons */}
            <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
                {/* Channel Info */}
                <div className="flex items-center gap-3">
                    <img
                        src={channelImg}
                        alt="channel"
                        className="w-10 h-10 rounded-full"
                    />

                    <div>
                        <p className="font-medium text-gray-900">
                            {channelTitle}
                        </p>
                        <p className="text-sm text-gray-500">
                            3.23k subscribers
                        </p>
                    </div>

                    <button className="ml-3 px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium hover:bg-gray-200">
                        Join
                    </button>

                    <button className="px-4 py-1.5 rounded-full bg-black text-white text-sm font-medium">
                        Subscribe
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mt-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full whitespace-nowrap text-sm hover:bg-gray-200">
                        👍 <span className="hidden sm:inline">Like</span>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full whitespace-nowrap text-sm hover:bg-gray-200">
                        👎
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full whitespace-nowrap text-sm hover:bg-gray-200">
                        ↗ <span className="hidden sm:inline">Share</span>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full whitespace-nowrap text-sm hover:bg-gray-200">
                        ✨ <span className="hidden sm:inline">Ask</span>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full whitespace-nowrap text-sm hover:bg-gray-200">
                        ⬇ <span className="hidden sm:inline">Download</span>
                    </button>

                    <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
                        ⋯
                    </button>
                </div>
            </div>

            {/* Description */}
            <div className="mt-4 bg-gray-100 rounded-xl p-4 text-sm text-gray-800 hover:bg-yellow-50">
                <p className="font-medium text-red-700">
                    {formatViews(viewCount)} views •{" "}
                    <span className="ml-2">{timeAgo(publishedAt)}</span>
                </p>
                <Description
                    description={description}
                    publishAt={{ publishedAt }}
                />
            </div>
            <div className="mt-4">
                <div className="flex">
                    <h1 className="text-xl font-bold ">4 Comments</h1>
                    <div className="mt-1 ml-6 flex">
                        <ArrowUpDown size={22} className="text-gray-600" />
                        <span className="ml-2 -mt-1 text-sm text-black">
                            Sort By
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoOptions;
