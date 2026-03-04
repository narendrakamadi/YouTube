import React from "react";
import Subscriptions from "./Subscriptions";
import You from "./You";
import Explore from "./Explore";

const SidebarLayout = () => {
    return (
        <div className="p-2 w-60 shadow-xl h-screen">
            <Subscriptions />
            <You />
            <Explore />
        </div>
    );
};

export default SidebarLayout;
