import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound.jsx";
import Watch from "../pages/Watch";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/watch/:videoId",
                element: <Watch />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
