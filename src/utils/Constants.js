const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=25&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

export const YOUTUBE_RELATED_VIDEOS_API = `${YOUTUBE_API_BASE}/search?part=snippet&type=video&maxResults=25`;