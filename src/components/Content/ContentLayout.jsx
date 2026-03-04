import React from "react";
import QuickLinks from "./QuickLinks";
import Shorts from "./Shorts";
import VideoFeed from "./VideoFeed";

const ContentLayout = () => {
    return (
        <div className="p-2">
            <QuickLinks />
            <Shorts />
            <VideoFeed />
        </div>
    );
};

export default ContentLayout;
