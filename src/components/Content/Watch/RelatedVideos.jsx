import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_RELATED_VIDEOS_API } from "../../../utils/Constants";
import { Link } from "react-router-dom";
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const RelatedVideos = ({ videoId }) => {
    const [relatedVideos, setRelatedVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const reduxVideos = useSelector((store) => store.video.videos);

    let videos = reduxVideos;

    if (!videos || videos.length === 0) {
        const localVideos = localStorage.getItem("videos");
        videos = localVideos ? JSON.parse(localVideos) : [];
    }


    const videoInfo = videos.find((item) => item.id === videoId);
    const tags = videoInfo?.snippet?.tags || [];
    const combinedTags = Array.isArray(tags) ? tags.slice(0, 4).join(" ") : "";

    console.log("VideoInfo: ", videoInfo);

    useEffect(() => {
        const getRelatedVideos = async () => {
            if (!YOUTUBE_API_KEY) {
                setErrorMessage("Missing YouTube API key.");
                setRelatedVideos([]);
                return;
            }

            if (!videoId || !combinedTags.trim()) {
                setRelatedVideos([]);
                setErrorMessage("");
                return;
            }

            try {
                setIsLoading(true);
                setErrorMessage("");
                const URL = `${YOUTUBE_RELATED_VIDEOS_API}&q=${encodeURIComponent(
                    combinedTags,
                )}&key=${YOUTUBE_API_KEY}`;

                console.log(URL);

                const data = await fetch(URL);
                const json = await data.json();

                if (!data.ok) {
                    const reason =
                        json?.error?.errors?.[0]?.reason ||
                        `http_${data.status}`;

                    if (data.status === 403) {
                        setErrorMessage(
                            `Related videos unavailable (403: ${reason}). Check API key restrictions/quota.`,
                        );
                    } else {
                        setErrorMessage(
                            "Unable to load related videos right now.",
                        );
                    }

                    setRelatedVideos([]);
                    return;
                }

                setRelatedVideos(Array.isArray(json?.items) ? json.items : []);
            } catch (error) {
                console.error("Error fetching related videos:", error);
                setErrorMessage("Unable to load related videos right now.");
                setRelatedVideos([]);
            } finally {
                setIsLoading(false);
            }
        };

        getRelatedVideos();
    }, [videoId, combinedTags]);

    const quickLinks = [
        "All",
        "Music",
        "News",
        "Mixes",
        "Hariharan",
        "Live",
        "Mantras",
        "Podcasts",
        "Movie musicals",
        "Jukebox",
        "APIs",
        "Playlists",
        "Data Structures",
        "Bloom",
        "Joy",
        "Current Affaires",
    ];

    const shouldScroll = relatedVideos?.length > 6;

    return (
        <div className="w-full">
            <div className="lg:sticky lg:top-6">
                <div className="rounded-lg bg-white shadow">
                    <div className="flex gap-2 overflow-x-auto border-b p-3">
                        {quickLinks.map((item, index) => (
                            <button
                                key={index}
                                className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition ${
                                    index === 0
                                        ? "bg-black text-white hover:bg-gray-800"
                                        : "bg-gray-100 hover:bg-gray-200"
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div
                        className={
                            shouldScroll
                                ? "h-auto overflow-visible lg:max-h-[calc(100dvh-120px)] lg:overflow-y-auto"
                                : "h-auto overflow-visible"
                        }
                    >
                        {isLoading && (
                            <p className="px-3 py-2 text-sm text-gray-500">
                                Loading related videos...
                            </p>
                        )}

                        {errorMessage && (
                            <p className="px-3 py-2 text-sm text-red-600">
                                {errorMessage}
                            </p>
                        )}

                        {relatedVideos.map((video) => (
                            <Link
                                key={video?.id?.videoId || video?.etag}
                                to={"/watch?v=" + video?.id?.videoId}
                            >
                                <div className="flex cursor-pointer gap-2 p-2 hover:bg-gray-50">
                                    <div className="relative h-24 w-40 shrink-0">
                                        <img
                                            src={
                                                video?.snippet?.thumbnails?.high
                                                    ?.url
                                            }
                                            alt={video?.snippet?.title}
                                            className="h-full w-full rounded-lg object-cover"
                                        />
                                        <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 text-xs text-white">
                                            {video.duration}
                                        </span>
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="mb-1 line-clamp-2 text-sm font-medium">
                                            {video?.snippet?.title}
                                        </h3>
                                        <p className="flex items-center gap-1 text-xs text-gray-600">
                                            {video?.snippet?.channelTitle}
                                            {video.verified && <span>✓</span>}
                                        </p>
                                        <p className="text-xs text-gray-600">
                                            {video.views}
                                            {video.uploadTime &&
                                                ` • ${video.uploadTime}`}
                                        </p>
                                        {video.isNew && (
                                            <span className="mt-1 inline-block rounded bg-gray-200 px-2 py-0.5 text-xs">
                                                New{" "}
                                            </span>
                                        )}
                                    </div>

                                    <button className="h-6 w-6 text-gray-600">
                                        ⋮
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedVideos;
