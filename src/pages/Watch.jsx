import React from "react";
import Video from "../components/Content/Watch/Video";
import Comment from "../components/Content/Watch/Comment";
import RecomendedVideos from "../components/Content/Watch/RecomendedVideos";

const Watch = () => {
    return (
        <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-[70%]">
                    <Video />
                    <div className="mt-6">
                        <Comment />
                    </div>
                </div>
                <div className="h-screen">
                    <RecomendedVideos />
                </div>
            </div>
        </div>
    );
};

export default Watch;
