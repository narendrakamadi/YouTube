import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addVideos } from "../utils/videoSlice";
import {
    YOUTUBE_VIDEOS_API,
    YOUTUBE_RELATED_VIDEOS_API
} from "../utils/Constants";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const useVideoFeed = (filter) => {
    const [videos, setVideos] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const getVideos = async () => {
            try {
                let url = YOUTUBE_VIDEOS_API;

                // if chip is not "All" use search API
                if (filter && filter !== "All") {
                    url = `${YOUTUBE_RELATED_VIDEOS_API}&q=${encodeURIComponent(
                        filter
                    )}&key=${YOUTUBE_API_KEY}`;
                }

                const data = await fetch(url);
                const json = await data.json();
                const items = Array.isArray(json?.items) ? json.items : [];

                setVideos(items);
                dispatch(addVideos(items));
                localStorage.setItem("videos", JSON.stringify(items));
            } catch (error) {
                console.error("Error fetching videos:", error);
                setVideos([]);
            }
        };

        getVideos();
    }, [filter, dispatch]);

    return videos;
}

export default useVideoFeed