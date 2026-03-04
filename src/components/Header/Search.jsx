import { Search as SearchIcon, Mic } from "lucide-react";

const Search = () => {
    return (
        <div className="flex items-center w-full gap-2 md:gap-3">
            {/* Search Input + Button */}
            <div className="flex flex-1 items-center border border-gray-300 rounded-full overflow-hidden bg-white">
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 px-2 sm:px-4 py-1.5 sm:py-2 outline-none text-xs sm:text-sm"
                />

                <button className="px-3 sm:px-5 py-1.5 sm:py-2 border-l border-gray-300 bg-gray-100 hover:bg-gray-200 transition">
                    <SearchIcon size={18} className="sm:w-5 sm:h-5" />
                </button>
            </div>

            {/* Mic Button - Hidden on small screens */}
            <button className="hidden sm:block p-1.5 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <Mic size={18} className="sm:w-5 sm:h-5" />
            </button>
        </div>
    );
};

export default Search;
