import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Favorite from "../Pages/Favorite";
import Login from "../Pages/Login";
import Phones from "../components/Phones/Phones";
import ErrorPage from "../Pages/ErrorPage";
import PhoneDetails from "../components/Phones/PhoneDetails";




const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/favorite',
                element: <Favorite />
            },
            {
                path: '/phones/:id',
                element: <PhoneDetails />,
                loader: () => fetch(`/phoneData.json`)
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])
export default router;