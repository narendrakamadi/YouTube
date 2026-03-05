import React from "react";

const Profile = () => {
    return (
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 text-xs sm:text-sm font-medium transition duration-200">
                <span>+</span>
                <span>Create</span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition duration-200">
                <span className="text-xl sm:text-2xl">🔔</span>
            </button>
            <img
                className="rounded-full w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:opacity-80 transition duration-200"
                src="https://avatars.githubusercontent.com/u/6338797?v=4&size=64"
                alt="Profile"
            />
        </div>
    );
};

export default Profile;
