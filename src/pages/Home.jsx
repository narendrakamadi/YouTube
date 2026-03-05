import React from "react";
import SidebarLayout from "../components/Sidebar/SidebarLayout";
import ContentLayout from "../components/Content/ContentLayout";

const Home = () => {
    return (
        <div className="flex h-screen bg-white">
            <SidebarLayout />
            <ContentLayout />
        </div>
    );
};

export default Home;
