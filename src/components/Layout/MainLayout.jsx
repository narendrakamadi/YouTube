import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";

const MainLayout = () => {
    return (
        <div className="">
            <Header />
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
