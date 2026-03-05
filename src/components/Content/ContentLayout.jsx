import QuickLinks from "./QuickLinks";
import VideoFeed from "./VideoFeed";

const ContentLayout = () => {
    return (
        <div className="flex-1 flex flex-col overflow-y-auto bg-white">
            <QuickLinks />
            <div className="flex-1">
                <VideoFeed />
            </div>
        </div>
    );
};

export default ContentLayout;
