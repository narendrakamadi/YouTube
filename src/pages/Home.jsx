import React from "react";
import SidebarLayout from "../components/Sidebar/SidebarLayout";
import ContentLayout from "../components/Content/ContentLayout";
import { useSelector } from "react-redux";

const Home = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    return (
        <div className="flex h-screen bg-white">
            {isMenuOpen && <SidebarLayout />}
            <ContentLayout />
        </div>
    );
};

export default Home;
