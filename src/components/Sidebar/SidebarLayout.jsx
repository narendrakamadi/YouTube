import React from "react";
import Subscriptions from "./Subscriptions";
import You from "./You";
import Explore from "./Explore";

const SidebarLayout = () => {
    return (
        <div className="hidden lg:flex flex-col w-64 border-r border-gray-200 bg-white h-screen overflow-y-auto">
            <div className="flex-1 px-3 py-2">
                <Subscriptions />
                <div className="my-4 border-t border-gray-200"></div>
                <You />
                <div className="my-4 border-t border-gray-200"></div>
                <Explore />
            </div>
        </div>
    );
};

export default SidebarLayout;
