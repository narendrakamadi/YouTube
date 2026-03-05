import React from "react";

const Video = () => {
    return (
        <div className=" rounded-2xl ">
            <iframe
                width="1015"
                height="600"
                src="https://www.youtube.com/embed/ft7D4XIKpcs?si=8Z_gX3o4gZrUq_A2"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Video;
