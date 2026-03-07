import { Search as SearchIcon, Clock } from "lucide-react";
import { useSelector } from "react-redux";

const Autocomplete = () => {
    const isAutoCompleteOpen = useSelector(
        (store) => store.app.isAutoSearchOpen,
    );

    if (!isAutoCompleteOpen) return null;

    return (
        <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm font-bold">react tutorial</span>
                </div>
                <img
                    src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                    alt="img"
                    className="w-13 h-7 rounded"
                />
            </div>

            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                    <SearchIcon size={16} className="text-gray-500" />
                    <span className="text-sm font-bold">react tutorial</span>
                </div>
                <img
                    src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                    alt="img"
                    className="w-13 h-7 rounded"
                />
            </div>

            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                    <SearchIcon size={16} className="text-gray-500" />
                    <span className="text-sm font-bold">react tutorial</span>
                </div>
                <img
                    src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                    alt="img"
                    className="w-13 h-7 rounded"
                />
            </div>

            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                    <SearchIcon size={16} className="text-gray-500" />
                    <span className="text-sm font-bold">react tutorial</span>
                </div>
                <img
                    src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                    alt="img"
                    className="w-13 h-7 rounded"
                />
            </div>

            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                    <SearchIcon size={16} className="text-gray-500" />
                    <span className="text-sm font-bold">react tutorial</span>
                </div>
                <img
                    src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                    alt="img"
                    className="w-13 h-7 rounded"
                />
            </div>

            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                    <SearchIcon size={16} className="text-gray-500" />
                    <span className="text-sm font-bold">react tutorial</span>
                </div>
                <img
                    src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                    alt="img"
                    className="w-13 h-7 rounded"
                />
            </div>

            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                    <SearchIcon size={16} className="text-gray-500" />
                    <span className="text-sm font-bold">react tutorial</span>
                </div>
                <img
                    src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                    alt="img"
                    className="w-13 h-7 rounded"
                />
            </div>

            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                    <SearchIcon size={16} className="text-gray-500" />
                    <span className="text-sm font-bold">react tutorial</span>
                </div>
                <img
                    src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                    alt="img"
                    className="w-13 h-7 rounded"
                />
            </div>

            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                    <SearchIcon size={16} className="text-gray-500" />
                    <span className="text-sm font-bold">react tutorial</span>
                </div>
                <img
                    src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                    alt="img"
                    className="w-13 h-7 rounded"
                />
            </div>

            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                    <SearchIcon size={16} className="text-gray-500" />
                    <span className="text-sm font-bold">react tutorial</span>
                </div>
                <img
                    src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                    alt="img"
                    className="w-13 h-7 rounded"
                />
            </div>

            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                    <SearchIcon size={16} className="text-gray-500" />
                    <span className="text-sm font-bold">react tutorial</span>
                </div>
                <img
                    src="https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg"
                    alt="img"
                    className="w-13 h-7 rounded"
                />
            </div>
        </div>
    );
};

export default Autocomplete;
