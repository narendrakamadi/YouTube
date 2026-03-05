import { Search as SearchIcon, Mic } from "lucide-react";

const Search = () => {
    return (
        <div className="flex items-center w-full gap-2 md:gap-3">
            {/* Search Input + Button */}
            <div className="flex flex-1 items-center border border-gray-300 rounded-full overflow-hidden bg-white hover:border-gray-400 hover:shadow-sm transition duration-200">
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 outline-none text-sm bg-white"
                />

                <button className="px-4 sm:px-6 py-2 sm:py-2.5 cursor-pointer border-l border-gray-300 bg-gray-50 hover:bg-gray-100 transition duration-200">
                    <SearchIcon size={20} className="text-gray-600" />
                </button>
            </div>

            {/* Mic Button - Hidden on small screens */}
            <button className="hidden sm:flex items-center cursor-pointer justify-center p-2.5 rounded-full bg-gray-50 hover:bg-gray-100 transition duration-200">
                <Mic size={20} className="text-gray-600" />
            </button>
        </div>
    );
};

export default Search;
