import { useState } from "react";
import { filterChips } from "../../utils/Constants";
import { useDispatch } from "react-redux";
import { setFilter } from "../../utils/videoSlice";

const QuickLinks = () => {
    const [activeChip, setActiveChip] = useState(0);
    const dispatch = useDispatch();
    const handleFilterChips = (index, item) => {
        setActiveChip(index);
        dispatch(setFilter(item));
    };

    return (
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
            <div className="overflow-x-auto">
                <div className="flex gap-3 px-4 py-3 w-max">
                    {filterChips.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleFilterChips(index, item)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                                index === activeChip
                                    ? "bg-gray-900 text-white"
                                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;
