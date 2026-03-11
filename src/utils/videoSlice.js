import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        videos: [],
        nextPageToken: null,
        loading: false,
        error: null
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        addVideos: (state, action) => {
            state.videos = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { addVideos, setLoading, setError } = videoSlice.actions;
export default videoSlice.reducer;