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
        <div className="w-full">
            <div className="lg:sticky lg:top-6">
                <div className="rounded-lg bg-white shadow">
                    <div className="flex gap-2 overflow-x-auto border-b p-3">
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
                                ? "h-auto overflow-visible lg:max-h-[calc(100dvh-120px)] lg:overflow-y-auto"
                                : "h-auto overflow-visible"
                        }
                    >
                        {suggestedVideos.map((video) => (
                            <div
                                key={video.id}
                                className="flex cursor-pointer gap-2 p-2 hover:bg-gray-50"
                            >
                                <div className="relative h-24 w-40 flex-shrink-0">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="h-full w-full rounded-lg object-cover"
                                    />
                                    <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 text-xs text-white">
                                        {video.duration}
                                    </span>
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="mb-1 line-clamp-2 text-sm font-medium">
                                        {video.title}
                                    </h3>
                                    <p className="flex items-center gap-1 text-xs text-gray-600">
                                        {video.channel}
                                        {video.verified && <span>✓</span>}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        {video.views}
                                        {video.uploadTime &&
                                            ` • ${video.uploadTime}`}
                                    </p>
                                    {video.isNew && (
                                        <span className="mt-1 inline-block rounded bg-gray-200 px-2 py-0.5 text-xs">
                                            New{" "}
                                        </span>
                                    )}
                                </div>

                                <button className="h-6 w-6 text-gray-600">⋮</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecomendedVideos;
