import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
const Routes = () => {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
    ]);

    return (
        <>
            <RouterProvider router={route}></RouterProvider>
        </>
    );
};

export default Routes;