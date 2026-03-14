import React, { useState } from "react";

const QuickLinks = () => {
    const [activeChip, setActiveChip] = useState(0);
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
        "Joy",
        "Current Affaires",
    ];

    const handleFilterChips = (index) => {
        setActiveChip(index);
        console.log("Selected Chip: ", index);
    };

    return (
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
            <div className="overflow-x-auto">
                <div className="flex gap-3 px-4 py-3 w-max">
                    {quickLinks.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleFilterChips(index)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                                index === activeChip
                                    ? "bg-gray-900 text-white"
                                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
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
