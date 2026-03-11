import React, { useState } from "react";

const Description = ({ description }) => {
    const [showMore, setShowMore] = useState(false);
    const maxLength = 380;
    const isLongText = description?.length > maxLength;

    const displayedText = showMore
        ? description
        : description?.substring(0, maxLength);

    return (
        <div className="rounded-xl text-sm text-black">
            {displayedText}
            {!showMore && isLongText && "..."}

            {isLongText && (
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="mt-1 font-medium hover:underline"
                >
                    {showMore ? "show less" : "...more"}
                </button>
            )}
        </div>
    );
};

export default Description;
