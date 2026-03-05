import React from "react";

const You = () => {
    const items = [
        "History",
        "Playlists",
        "Watch Later",
        "Liked videos",
        "Your videos",
        "Downloads",
    ];

    return (
        <div className="py-3">
            <h3 className="font-semibold text-sm text-gray-900 px-3 mb-3 flex items-center gap-2">
                You
                <span className="text-gray-600">›</span>
            </h3>
            <ul className="space-y-1">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition duration-150"
                    >
                        {item}
                    </li>
                ))}
                <li className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded cursor-pointer transition duration-150 font-medium">
                    Show more
                </li>
            </ul>
        </div>
    );
};

export default You;
