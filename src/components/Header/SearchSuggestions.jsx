import { Search as SearchIcon, Clock } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAutoSearch } from "../../utils/appSlice";

const SearchSuggestions = () => {
    const dispatch = useDispatch();

    const isAutoCompleteOpen = useSelector(
        (store) => store.app.isAutoSearchOpen,
    );

    const handleClick = () => {
        dispatch(setAutoSearch(false));
    };

    if (!isAutoCompleteOpen) return null;

    return (
        <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
            <Link
                to={"/results?search_query=react+tutorial+in+hindi"}
                onClick={handleClick}
            >
                <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <Clock size={16} className="text-gray-500" />
                        <span className="text-sm font-bold">
                            react tutorial
                        </span>
                    </div>
                    <img
                        src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                        alt="img"
                        className="w-13 h-7 rounded"
                    />
                </div>
            </Link>

            <Link
                to={"/results?search_query=react+tutorial+in+hindi"}
                onClick={handleClick}
            >
                <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <SearchIcon size={16} className="text-gray-500" />
                        <span className="text-sm font-bold">
                            react tutorial
                        </span>
                    </div>
                    <img
                        src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                        alt="img"
                        className="w-13 h-7 rounded"
                    />
                </div>
            </Link>

            <Link
                to={"/results?search_query=react+tutorial+in+hindi"}
                onClick={handleClick}
            >
                <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <SearchIcon size={16} className="text-gray-500" />
                        <span className="text-sm font-bold">
                            react tutorial
                        </span>
                    </div>
                    <img
                        src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                        alt="img"
                        className="w-13 h-7 rounded"
                    />
                </div>
            </Link>

            <Link
                to={"/results?search_query=react+tutorial+in+hindi"}
                onClick={handleClick}
            >
                <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <SearchIcon size={16} className="text-gray-500" />
                        <span className="text-sm font-bold">
                            react tutorial
                        </span>
                    </div>
                    <img
                        src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                        alt="img"
                        className="w-13 h-7 rounded"
                    />
                </div>
            </Link>

            <Link
                to={"/results?search_query=react+tutorial+in+hindi"}
                onClick={handleClick}
            >
                <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <SearchIcon size={16} className="text-gray-500" />
                        <span className="text-sm font-bold">
                            react tutorial
                        </span>
                    </div>
                    <img
                        src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                        alt="img"
                        className="w-13 h-7 rounded"
                    />
                </div>
            </Link>

            <Link
                to={"/results?search_query=react+tutorial+in+hindi"}
                onClick={handleClick}
            >
                <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <SearchIcon size={16} className="text-gray-500" />
                        <span className="text-sm font-bold">
                            react tutorial
                        </span>
                    </div>
                    <img
                        src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                        alt="img"
                        className="w-13 h-7 rounded"
                    />
                </div>
            </Link>

            <Link
                to={"/results?search_query=react+tutorial+in+hindi"}
                onClick={handleClick}
            >
                <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <SearchIcon size={16} className="text-gray-500" />
                        <span className="text-sm font-bold">
                            react tutorial
                        </span>
                    </div>
                    <img
                        src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                        alt="img"
                        className="w-13 h-7 rounded"
                    />
                </div>
            </Link>

            <Link
                to={"/results?search_query=react+tutorial+in+hindi"}
                onClick={handleClick}
            >
                <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <SearchIcon size={16} className="text-gray-500" />
                        <span className="text-sm font-bold">
                            react tutorial
                        </span>
                    </div>
                    <img
                        src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                        alt="img"
                        className="w-13 h-7 rounded"
                    />
                </div>
            </Link>
        </div>
    );
};

export default SearchSuggestions;
