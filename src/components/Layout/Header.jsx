import React from "react";
import Logo from "../Header/Logo";
import Search from "../Header/Search";
import Profile from "../Header/Profile";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 flex items-center justify-between gap-2 px-3 sm:px-4 py-2 border-b border-gray-200 bg-white">
            {/* Left */}
            <Logo />

            {/* Center Search (Desktop only) */}
            <div className="flex-1 max-w-[160px] sm:max-w-xs md:max-w-xl">
                <Search />
            </div>

            {/* Right */}
            <Profile />
        </div>
    );
};

export default Header;