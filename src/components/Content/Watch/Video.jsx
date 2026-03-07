import React from "react";

const Video = () => {
    return (
        <div className="w-full overflow-hidden rounded-2xl bg-black">
            <div className="aspect-video w-full">
                <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/ft7D4XIKpcs?si=8Z_gX3o4gZrUq_A2"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Video;
