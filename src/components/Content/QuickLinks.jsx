import React from "react";

const QuickLinks = () => {
    const quickLinks = [
        "All",
        "Music",
        "News",
        "Mixes",
        "Hariharan",
        "Live",
        "Mantras",
        "Podcasts",
        "Movie musicals",
        "Jukebox",
        "APIs",
        "Playlists",
        "Data Structures",
        "Bloom",
    ];
    return (
        <div className="sticky z-40 bg-white border-b border-gray-200">
            <div className="flex gap-3 px-4 py-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {quickLinks.map((item, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 flex-shrink-0 ${
                            index === 0
                                ? "bg-gray-900 text-white hover:bg-gray-800"
                                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuickLinks;
