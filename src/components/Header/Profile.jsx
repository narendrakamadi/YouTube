import React from "react";

const Profile = () => {
    return (
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button className="hidden sm:block px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-400 text-xs sm:text-sm transition">
                Create
            </button>
            <div className="text-lg sm:text-xl cursor-pointer hover:opacity-70 transition">🔔</div>
            <img
                className="rounded-full w-7 h-7 sm:w-8 sm:h-8 cursor-pointer hover:opacity-70 transition"
                src="https://avatars.githubusercontent.com/u/6338797?v=4&size=64"
                alt="Profile"
            />
        </div>
    );
};

export default Profile;
