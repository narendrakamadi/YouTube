const RecomendedVideos = () => {
    const suggestedVideos = [
        {
            id: 1,
            thumbnail:
                "https://i.ytimg.com/vi/aEu4neydFfs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCOFHTnQbXeEf74Z3Xrhn57OjGXnQ",
            title: "Bollywood Hindi Songs | Non Stop Bollywood Hindi Songs | ...",
            channel: "Tips Official",
            verified: true,
            views: "115k views",
            uploadTime: "3 weeks ago",
            duration: "1:14:12",
        },
        {
            id: 2,
            thumbnail:
                "https://i.ytimg.com/vi/aEu4neydFfs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCOFHTnQbXeEf74Z3Xrhn57OjGXnQ",
            title: "Azimov - The Best Mixes (Romantic Deep House Mix)",
            channel: "AZIMOV",
            verified: true,
            views: "794k views",
            uploadTime: "2 years ago",
            duration: "2:01:01",
        },
        {
            id: 3,
            thumbnail:
                "https://i.ytimg.com/vi/aEu4neydFfs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCOFHTnQbXeEf74Z3Xrhn57OjGXnQ",
            title: "Relaxing Bollywood Love Atmosphere 💖✨ | Soft ...",
            channel: "Bollywood Romance Echoes",
            verified: false,
            views: "9 views",
            uploadTime: "2 hours ago",
            duration: "1:05:19",
            isNew: true,
        },
        {
            id: 4,
            thumbnail:
                "https://i.ytimg.com/vi/aEu4neydFfs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCOFHTnQbXeEf74Z3Xrhn57OjGXnQ",
            title: "Mix – Pritam Chakraborty",
            channel: "Shreya Ghoshal, Faheem Abdullah, Mohit...",
            verified: false,
            views: "",
            uploadTime: "",
            duration: "Mix",
        },
        {
            id: 5,
            thumbnail:
                "https://i.ytimg.com/vi/aEu4neydFfs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCOFHTnQbXeEf74Z3Xrhn57OjGXnQ",
            title: "Mix – Pritam Chakraborty",
            channel: "Shreya Ghoshal, Faheem Abdullah, Mohit...",
            verified: false,
            views: "",
            uploadTime: "",
            duration: "Mix",
        },
        {
            id: 6,
            thumbnail:
                "https://i.ytimg.com/vi/aEu4neydFfs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCOFHTnQbXeEf74Z3Xrhn57OjGXnQ",
            title: "Mix – Pritam Chakraborty",
            channel: "Shreya Ghoshal, Faheem Abdullah, Mohit...",
            verified: false,
            views: "",
            uploadTime: "",
            duration: "Mix",
        },
        {
            id: 7,
            thumbnail:
                "https://i.ytimg.com/vi/aEu4neydFfs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCOFHTnQbXeEf74Z3Xrhn57OjGXnQ",
            title: "Mix – Pritam Chakraborty",
            channel: "Shreya Ghoshal, Faheem Abdullah, Mohit...",
            verified: false,
            views: "",
            uploadTime: "",
            duration: "Mix",
        },
        {
            id: 8,
            thumbnail:
                "https://i.ytimg.com/vi/aEu4neydFfs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCOFHTnQbXeEf74Z3Xrhn57OjGXnQ",
            title: "Mix – Pritam Chakraborty",
            channel: "Shreya Ghoshal, Faheem Abdullah, Mohit...",
            verified: false,
            views: "",
            uploadTime: "",
            duration: "Mix",
        },
    ];

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

    const shouldScroll = suggestedVideos.length > 6;

    return (
        <div className="w-full lg:w-[30%]">
            <div className="sticky top-6">
                <div className="bg-white rounded-lg shadow">
                    <div className="flex gap-2 p-3 border-b overflow-x-auto">
                        {quickLinks.map((item, index) => (
                            <button
                                key={index}
                                className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition ${
                                    index === 0
                                        ? "bg-black text-white hover:bg-gray-800"
                                        : "bg-gray-100 hover:bg-gray-200"
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div
                        className={
                            shouldScroll
                                ? "max-h-[calc(100vh-200px)] overflow-y-auto"
                                : "h-auto overflow-visible"
                        }
                    >
                        {suggestedVideos.map((video) => (
                            <div
                                key={video.id}
                                className="flex gap-2 p-2 hover:bg-gray-50 cursor-pointer"
                            >
                                <div className="relative w-40 h-24 flex-shrink-0">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                                        {video.duration}
                                    </span>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-medium line-clamp-2 mb-1">
                                        {video.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 flex items-center gap-1">
                                        {video.channel}
                                        {video.verified && <span>✓</span>}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        {video.views}
                                        {video.uploadTime &&
                                            ` • ${video.uploadTime}`}
                                    </p>
                                    {video.isNew && (
                                        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded mt-1 inline-block">
                                            New{" "}
                                        </span>
                                    )}
                                </div>

                                <button className="text-gray-600 h-6 w-6">
                                    ⋮
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecomendedVideos;
