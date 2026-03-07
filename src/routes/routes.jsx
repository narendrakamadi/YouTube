import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound.jsx";
import Watch from "../pages/Watch";
import Results from "../pages/Results.jsx";

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
                path: "/watch",
                element: <Watch />,
            },
            {
                path: "/results",
                element: <Results />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
