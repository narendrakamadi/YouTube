import { Link } from "react-router-dom";
import { formatViews, timeAgo } from "../../utils/Helper";

const VideoCard = ({ video }) => {
    const id = video?.id?.videoId || video?.id;
    const snippet = video?.snippet || {};
    const statistics = video?.statistics || {};
    const { title, thumbnails, channelTitle, publishedAt } = snippet;
    const { viewCount } = statistics;

    return (
        <Link key={id} to={"/watch?v=" + id}>
            <div className="group w-full cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
                {/* Thumbnail */}
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <img
                        src={thumbnails.high.url}
                        alt="video thumbnail"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                {/* Video Info */}
                <div className="flex mt-3">
                    <img
                        src={thumbnails.default.url}
                        alt="channel"
                        className="w-9 h-9 rounded-full"
                    />

                    <div className="ml-3">
                        <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {title}
                        </h3>

                        <p className="text-sm text-gray-600">{channelTitle}</p>

                        <p className="text-sm text-gray-600">
                            {viewCount ? formatViews(viewCount) : "—"} views •{" "}
                            {timeAgo(publishedAt)}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
