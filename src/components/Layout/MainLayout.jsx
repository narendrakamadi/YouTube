import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className="flex">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
