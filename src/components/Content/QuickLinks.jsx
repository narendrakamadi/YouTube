import React from "react";

const QuickLinks = () => {
    const quickLinks = [
        "All",
        "Music",
        "Mixes",
        "News",
        "Jukebox",
        "Playlists",
        "Movie musicals",
        "Live",
        "Podcasts",
        "Lo-fi",
        "APIs",
        "Arijit Singh",
        "Rainbow Dash",
        "Indian pop music",
        "Thrillers",
        "Vocal Music",
        "Presentations",
        "Consumer Electronics",
    ];
    return (
        <div>
            <div className="w-full border-b bg-white">
                <div className="flex gap-3 px-4 py-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    {quickLinks.map((item, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                                index === 0
                                    ? "bg-black text-white"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;
