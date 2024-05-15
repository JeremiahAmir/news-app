import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
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
}

export default App;
