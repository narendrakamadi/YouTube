import React from "react";
import SidebarLayout from "../components/Sidebar/SidebarLayout";
import ContentLayout from "../components/Content/ContentLayout";

const Home = () => {
    return (
        <div className="flex p-6">
            <SidebarLayout />
            <ContentLayout />
        </div>
    );
};

export default Home;
