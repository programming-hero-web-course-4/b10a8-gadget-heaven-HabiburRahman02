import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllProducts from "../pages/Home/AllProducts/AllProducts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <AllProducts></AllProducts>
                    },
                    {
                        path: '/category/:category',
                        element: <AllProducts></AllProducts>
                    },
                ]

            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    },
]);

export default router;
