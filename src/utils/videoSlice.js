import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        videos: [],
        searchSuggestions: [],
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
        setSearchSuggestions: (state, action) => {
            const keyword = action.payload;

            state.searchSuggestions = [
                keyword,
                ...state.searchSuggestions.filter(item => item !== keyword)
            ].slice(0, 10);
        }
    }
});

export const { addVideos, setLoading, setSearchSuggestions } = videoSlice.actions;
export default videoSlice.reducer;