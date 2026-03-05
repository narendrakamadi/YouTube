import React from "react";

const VideoFeed = () => {
    const data = [
        {
            id: 1,
            thumbnail:
                "https://i.ytimg.com/vi/p1_ZsHirsl8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAyMDlG7H5Z6BHQy25Wx0mVDK-Fgw",
            duration: "1:22:14",
            title: "Python Language Full Course (2026)",
            creator: "Shradha Khapra",
            channel: "Course",
            views: "2.7M",
            timeAgo: "2 years ago",
            description: "View full course",
        },
        {
            id: 2,
            thumbnail:
                "https://i.ytimg.com/vi/p1_ZsHirsl8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAyMDlG7H5Z6BHQy25Wx0mVDK-Fgw",
            duration: "1:03:51",
            title: "Lecture 5 : Loops in Python | While & For Loops",
            creator: "Shradha Khapra",
            views: "2.7m",
            timeAgo: "2 years ago",
        },
        {
            id: 3,
            thumbnail:
                "https://i.ytimg.com/vi/p1_ZsHirsl8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAyMDlG7H5Z6BHQy25Wx0mVDK-Fgw",
            duration: "1:01:34",
            title: "Vibes Of Love Mashup | Bollywood Love Songs Nonstop",
            creator: "Pyaar Ke Sur",
            views: "187k",
            timeAgo: "6 days ago",
        },
    ];
    return (
        <div className="bg-white px-4 sm:px-6 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {data.map((video) => (
                    <div
                        key={video.id}
                        className="group cursor-pointer flex flex-col h-full"
                    >
                        {/* Thumbnail Container */}
                        <div className="relative w-full bg-black rounded-lg overflow-hidden mb-3 aspect-video flex-shrink-0">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-200"
                            />
                            {/* Duration Badge */}
                            <div className="absolute bottom-2 right-2 bg-black/90 text-white text-xs font-medium px-2 py-1 rounded">
                                {video.duration}
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="flex gap-3 flex-1 min-w-0">
                            {/* Channel Avatar Placeholder */}
                            <div className="w-9 h-9 bg-gray-300 rounded-full flex-shrink-0 mt-0.5"></div>

                            {/* Text Content */}
                            <div className="flex-1 min-w-0">
                                {/* Title */}
                                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight mb-1">
                                    {video.title}
                                </h3>

                                {/* Creator Name */}
                                <p className="text-xs text-gray-600 mb-0.5">
                                    {video.creator}
                                </p>

                                {/* Views & Time */}
                                <p className="text-xs text-gray-600">
                                    {video.views} views • {video.timeAgo}
                                </p>
                            </div>

                            {/* Menu Button */}
                            <button className="text-gray-600 hover:text-gray-900 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity p-1">
                                ⋮
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoFeed;
