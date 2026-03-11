import React from "react";
import { ArrowUpDown } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoOptions = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");

    const videos = useSelector((store) => store.video.videos);
    const videoInfo = videos.find((item) => item.id === videoId);

    console.log("videoId: ", videoId);
    console.log("Videos:", videos);
    console.log("VideoInfo: ", videoInfo);

    return (
        <div className="w-full -mt-4 mb-4">
            {/* Title */}
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                Latest New Bollywood Songs Playlist | Trending Love Songs |
                Hindi Romantic Songs Collection
                <span className="text-blue-600 ml-1">#viral</span>
            </h1>

            {/* Channel + Buttons */}
            <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
                {/* Channel Info */}
                <div className="flex items-center gap-3">
                    <img
                        src="https://yt3.ggpht.com/crRpfEL-TVTVCnMBaDJRNx7yPPbJ4fK_ooA85FaaQ6U_ijTtug0GAs6g-tblIARrWBC1O-YzKHg=s88-c-k-c0x00ffffff-no-rj"
                        alt="channel"
                        className="w-10 h-10 rounded-full"
                    />

                    <div>
                        <p className="font-medium text-gray-900">
                            SoulVibe Studio
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
            <div className="mt-4 bg-red-50 rounded-xl p-4 text-sm text-gray-800">
                <p className="font-medium text-red-700">
                    349 views <span className="ml-2">1 day ago</span>
                </p>

                <p className="mt-2">
                    New Hit Trending Love Songs | Hindi Romantic Songs
                    Collection | New Hindi Love Songs 2026 | Nonstop Romantic
                    Songs Playlist | New Song 2026 | Arijit Singh, Jubin
                    Nautiyal, Atif Aslam | Audio Jukebox
                </p>

                <button className="mt-1 font-medium hover:underline">
                    ...more
                </button>
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
