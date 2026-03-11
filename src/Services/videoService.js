import { YOUTUBE_VIDEOS_API } from "../utils/Constants";

export const fetchYoutubeVideos = async (pageToken = "") => {
    const res = await fetch(`${YOUTUBE_VIDEOS_API}&pageToken=${pageToken}`);
    const data = await res.json();
    return data;
};