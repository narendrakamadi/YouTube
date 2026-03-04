import React from "react";
import Logo from "../Header/Logo";
import Search from "../Header/Search";
import Profile from "../Header/Profile";

const Header = () => {
    return (
        <div className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3 gap-2 sm:gap-4">
            <Logo />
            <div className="hidden md:flex flex-1 max-w-2xl">
                <Search />
            </div>
            <div className="flex md:hidden flex-1">
                <Search />
            </div>
            <Profile />
        </div>
    );
};

export default Header;
