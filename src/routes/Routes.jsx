import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import SearchNews from "../pages/SearchNews";
const Routes = () => {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/search-news",
            element: <SearchNews />,
        },
    ]);

    return (
        <>
            <RouterProvider router={route}></RouterProvider>
        </>
    );
};

export default Routes;
