import { Search as SearchIcon, Mic } from "lucide-react";

const Search = () => {
    return (
        <div className="flex items-center w-full gap-2">

            {/* Search Box */}
            <div className="flex flex-1 items-center border border-gray-300 rounded-full overflow-hidden bg-white hover:border-gray-400 hover:shadow-sm transition">

                {/* Input */}
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 outline-none text-sm"
                />

                {/* Search Button */}
                <button className="px-3 sm:px-5 py-1.5 sm:py-2 border-l border-gray-300 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                    <SearchIcon size={18} className="text-gray-600" />
                </button>
            </div>

            {/* Mic Button (hide on very small screens) */}
            <button className="hidden sm:flex items-center justify-center p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                <Mic size={20} className="text-gray-600" />
            </button>

        </div>
    );
};

export default Search;