import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const RelatedVideos = ({ videoId }) => {
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        const fetchRelatedVideos = async () => {
            if (!videoId) return;

            try {
                // 1️⃣ get video details to fetch tags
                const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`;
                const detailsRes = await fetch(videoDetailsUrl);
                const detailsJson = await detailsRes.json();

                const snippet = detailsJson?.items?.[0]?.snippet;

                const title = snippet?.title || "";
                const channelTitle = snippet?.channelTitle || "";

                const query = `${title} ${channelTitle}`;

                // 2️⃣ search related videos
                const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${encodeURIComponent(
                    query
                )}&key=${YOUTUBE_API_KEY}`;

                const response = await fetch(searchUrl);
                const json = await response.json();

                const filtered =
                    json?.items?.filter((v) => v?.id?.videoId !== videoId) || [];

                setRelatedVideos(filtered);
            } catch (error) {
                console.error("Error fetching related videos:", error);
            }
        };

        fetchRelatedVideos();
    }, [videoId]);

    return (
        <div>
            {relatedVideos.map((video) => (
                <Link key={video?.id?.videoId} to={`/watch?v=${video?.id?.videoId}`}>
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