import { Link } from "react-router-dom";
import useRelatedVideos from "../../../hooks/useRelatedVideos";

const RelatedVideos = ({ videoId }) => {
    const relatedVideos = useRelatedVideos(videoId);

    return (
        <div>
            {relatedVideos.map((video) => (
                <Link
                    key={video?.id?.videoId}
                    to={`/watch?v=${video?.id?.videoId}`}
                >
                    <div className="flex gap-2 p-2 hover:bg-gray-100">
                        <img
                            src={video?.snippet?.thumbnails?.medium?.url}
                            className="w-40 h-24 rounded"
                            alt={video?.snippet?.title}
                        />

                        <div>
                            <h3 className="text-sm font-semibold line-clamp-2">
                                {video?.snippet?.title}
                            </h3>
                            <p className="text-xs text-gray-600">
                                {video?.snippet?.channelTitle}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default RelatedVideos;
