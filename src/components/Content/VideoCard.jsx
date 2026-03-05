const VideoCard = ({video}) => {
    return (
        <div className="group w-full cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
            {/* Thumbnail */}
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                    src={video.thumbnail}
                    alt="video thumbnail"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Video Info */}
            <div className="flex mt-3">
                <img
                    src={video.avatar}
                    alt="channel"
                    className="w-9 h-9 rounded-full"
                />

                <div className="ml-3">
                    <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {video.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                        {video.channel}
                    </p>

                    <p className="text-sm text-gray-600">
                        {video.views} views • {video.time}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;