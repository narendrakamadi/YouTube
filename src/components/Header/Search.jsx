import { Search as SearchIcon, Mic } from "lucide-react";
import SearchSuggestions from "./SearchSuggestions";
import { useDispatch } from "react-redux";
import { setAutoSearch } from "../../utils/appSlice";
import { useEffect, useRef } from "react";
import { setSearchSuggestions } from "../../utils/videoSlice";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const searchRef = useRef(null);
    const searchKeyword = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(setAutoSearch(true));
    };

    const handleSearch = () => {
        const search = searchKeyword?.current?.value;

        if (!search) return;

        dispatch(setSearchSuggestions(search));
        dispatch(setAutoSearch(false));

        navigate(`/results?search_query=${encodeURIComponent(search)}`);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!searchRef.current?.contains(event.target)) {
                dispatch(setAutoSearch(false));
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dispatch]);

    return (
        <div
            ref={searchRef}
            className="relative flex items-center w-full gap-2"
        >
            {/* Search + Suggestions Wrapper */}
            <div className="relative flex-1">
                {/* Search Box */}
                <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white hover:border-gray-400 hover:shadow-sm transition">
                    {/* Input */}
                    <input
                        ref={searchKeyword}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                        type="text"
                        placeholder="Search"
                        className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 outline-none text-sm"
                        onClick={handleClick}
                    />

                    {/* Search Button */}
                    <button
                        onClick={handleSearch}
                        className="px-3 sm:px-5 py-1.5 sm:py-2 border-l border-gray-300 bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
                    >
                        <SearchIcon size={18} className="text-gray-600" />
                    </button>
                </div>

                {/* Autocomplete Dropdown */}
                <SearchSuggestions />
            </div>

            {/* Mic Button */}
            <button className="hidden sm:flex items-center justify-center p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                <Mic size={20} className="text-gray-600" />
            </button>
        </div>
    );
};

export default Search;
