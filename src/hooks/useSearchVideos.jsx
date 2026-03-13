import { useEffect, useState } from "react";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const useSearchVideos = (query) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if (!query) return;

        const fetchVideos = async () => {
            const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${encodeURIComponent(query)}&key=${YOUTUBE_API_KEY}`;

            const response = await fetch(searchUrl);
            const json = await response.json();

            setVideos(json.items);
        };

        fetchVideos();
    }, [query]);

    return videos;
};

export default useSearchVideos;
