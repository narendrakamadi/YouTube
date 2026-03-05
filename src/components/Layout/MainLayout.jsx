import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";

const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen bg-white">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
