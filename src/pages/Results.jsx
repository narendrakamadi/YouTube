import SidebarLayout from "../components/Sidebar/SidebarLayout";
import QuickLinks from "../components/Content/QuickLinks";
import { Link, useSearchParams } from "react-router-dom";
import useSearchVideos from "../hooks/useSearchVideos";

const Results = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("search_query");

    const searchResults = useSearchVideos(query);

    if (!searchResults?.length) return null;

    console.log(searchResults);

    return (
        <div className="flex overflow-x-hidden">
            {/* Sidebar */}
            <SidebarLayout />

            {/* Results Section */}
            <div className="flex-1 min-w-0 p-3 sm:p-4 md:p-6">
                {/* Filter Buttons */}
                <div className="w-full overflow-x-auto">
                    <QuickLinks />
                </div>

                {/* Results List */}
                <div className="flex flex-col gap-6 my-3">
                    {/* Result Card */}
                    {searchResults.map((video) => (
                        <Link
                            key={video.id.videoId}
                            to={`/watch?v=${video.id.videoId}`}
                        >
                            <div className="flex flex-col md:flex-row gap-4 cursor-pointer">
                                <img
                                    src={video?.snippet?.thumbnails?.high?.url}
                                    alt="thumbnail"
                                    className="
                                w-full
                                md:w-[420px]
                                md:h-[230px]
                                object-cover
                                rounded-xl
                                transition-transform
                                duration-300
                                hover:scale-105
                            "
                                />

                                <div className="flex flex-col gap-2">
                                    <h2 className="text-base sm:text-lg md:text-xl font-semibold leading-snug">
                                        {video?.snippet?.title}
                                    </h2>

                                    <p className="text-xs sm:text-sm text-gray-600">
                                        {video.snippet.channelTitle} • 1.2M
                                        views • 1 year ago
                                    </p>

                                    <p className="hidden sm:block text-sm text-gray-600 max-w-2xl">
                                        Node JS tutorial in Hindi #1
                                        Introduction | what is NodeJS |
                                        Installation and setup.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Results;
