import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        videos: [],
        filter: "All",
        searchSuggestions: []
    },
    reducers: {
        addVideos: (state, action) => {
            state.videos = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
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

export const { addVideos, setFilter, setSearchSuggestions } = videoSlice.actions;
export default videoSlice.reducer;