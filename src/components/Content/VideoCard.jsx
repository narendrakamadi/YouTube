const VideoCard = ({ video }) => {
    return (
        <div className="cursor-pointer">
            {/* Thumbnail */}
            <div className="group overflow-hidden rounded-xl">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Info Section */}
            <div className="flex mt-3 gap-3">
                {/* Avatar */}
                <img
                    src={video.avatar}
                    alt="channel"
                    className="w-10 h-10 rounded-full"
                />

                {/* Text */}
                <div className="flex flex-col">
                    <h3 className="text-sm font-semibold leading-snug line-clamp-2">
                        {video.title}
                    </h3>

                    <p className="text-xs text-gray-600 mt-1">
                        {video.channel}
                    </p>

                    <p className="text-xs text-gray-500">
                        {video.views} views • {video.time}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
