import React from "react";
import Logo from "../Header/Logo";
import Search from "../Header/Search";
import Profile from "../Header/Profile";

const Header = () => {
    return (
        <div className="flex items-center justify-between px-6 py-3 bg-white shadow">
            <Logo />
            <Search />
            <Profile />
        </div>
    );
};

export default Header;
