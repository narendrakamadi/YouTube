import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        isAutoSearchOpen: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        setAutoSearch: (state, action) => {
            state.isAutoSearchOpen = action.payload;
        }
    }
})

export const { toggleMenu, closeMenu, setAutoSearch } = appSlice.actions;

export default appSlice.reducer;