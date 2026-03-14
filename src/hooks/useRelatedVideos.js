import { useEffect, useState } from 'react'

const useRelatedVideos = (videoId) => {
    const [relatedVideos, setRelatedVideos] = useState([]);
    const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

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

    return relatedVideos;
}

export default useRelatedVideos