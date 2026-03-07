import SidebarLayout from "../components/Sidebar/SidebarLayout";
import QuickLinks from "../components/Content/QuickLinks";
import { Link } from "react-router-dom";

const Results = () => {
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
                    <Link to={"/watch?v="}>
                        <div className="flex flex-col md:flex-row gap-4 cursor-pointer">
                            <img
                                src="https://i.ytimg.com/vi/SqcY0GlETPk/maxresdefault.jpg"
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
                                    Node.js Tutorial in Hindi 2026 | Complete
                                    Node JS Course for Beginners
                                </h2>

                                <p className="text-xs sm:text-sm text-gray-600">
                                    Code Step By Step • 1.2M views • 1 year ago
                                </p>

                                <p className="hidden sm:block text-sm text-gray-600 max-w-2xl">
                                    Node JS tutorial in Hindi #1 Introduction |
                                    what is NodeJS | Installation and setup.
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/watch?v="}>
                        <div className="flex flex-col md:flex-row gap-4 cursor-pointer">
                            <img
                                src="https://i.ytimg.com/vi/SqcY0GlETPk/maxresdefault.jpg"
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
                                    Node.js Tutorial in Hindi 2026 | Complete
                                    Node JS Course for Beginners
                                </h2>

                                <p className="text-xs sm:text-sm text-gray-600">
                                    Code Step By Step • 1.2M views • 1 year ago
                                </p>

                                <p className="hidden sm:block text-sm text-gray-600 max-w-2xl">
                                    Node JS tutorial in Hindi #1 Introduction |
                                    what is NodeJS | Installation and setup.
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/watch?v="}>
                        <div className="flex flex-col md:flex-row gap-4 cursor-pointer">
                            <img
                                src="https://i.ytimg.com/vi/SqcY0GlETPk/maxresdefault.jpg"
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
                                    Node.js Tutorial in Hindi 2026 | Complete
                                    Node JS Course for Beginners
                                </h2>

                                <p className="text-xs sm:text-sm text-gray-600">
                                    Code Step By Step • 1.2M views • 1 year ago
                                </p>

                                <p className="hidden sm:block text-sm text-gray-600 max-w-2xl">
                                    Node JS tutorial in Hindi #1 Introduction |
                                    what is NodeJS | Installation and setup.
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/watch?v="}>
                        <div className="flex flex-col md:flex-row gap-4 cursor-pointer">
                            <img
                                src="https://i.ytimg.com/vi/SqcY0GlETPk/maxresdefault.jpg"
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
                                    Node.js Tutorial in Hindi 2026 | Complete
                                    Node JS Course for Beginners
                                </h2>

                                <p className="text-xs sm:text-sm text-gray-600">
                                    Code Step By Step • 1.2M views • 1 year ago
                                </p>

                                <p className="hidden sm:block text-sm text-gray-600 max-w-2xl">
                                    Node JS tutorial in Hindi #1 Introduction |
                                    what is NodeJS | Installation and setup.
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/watch?v="}>
                        <div className="flex flex-col md:flex-row gap-4 cursor-pointer">
                            <img
                                src="https://i.ytimg.com/vi/SqcY0GlETPk/maxresdefault.jpg"
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
                                    Node.js Tutorial in Hindi 2026 | Complete
                                    Node JS Course for Beginners
                                </h2>

                                <p className="text-xs sm:text-sm text-gray-600">
                                    Code Step By Step • 1.2M views • 1 year ago
                                </p>

                                <p className="hidden sm:block text-sm text-gray-600 max-w-2xl">
                                    Node JS tutorial in Hindi #1 Introduction |
                                    what is NodeJS | Installation and setup.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Results;
