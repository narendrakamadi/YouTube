import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6">
            {/* 404 Text */}
            <h1 className="text-7xl font-bold text-red-600 mb-4">404</h1>

            {/* Message */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center">
                This page isn’t available.
            </h2>

            <p className="text-gray-400 text-center max-w-md mb-8">
                Sorry about that. Try searching for something else or return to
                the homepage.
            </p>

            {/* Back Home Button */}
            <Link
                to="/"
                className="bg-red-600 hover:bg-red-700 transition-colors duration-200 px-3 py-2 rounded-lg font-medium"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
