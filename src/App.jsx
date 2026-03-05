import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

function App() {
    return (
        <Provider store={appStore}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
