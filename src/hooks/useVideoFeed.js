import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { YOUTUBE_VIDEOS_API } from '../utils/Constants';
import { addVideos } from "../utils/videoSlice";

const useVideoFeed = () => {
    const [videos, setVideos] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const getVideos = async () => {
            try {
                const data = await fetch(YOUTUBE_VIDEOS_API);
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
    }, [dispatch]);

    return videos;
}

export default useVideoFeed