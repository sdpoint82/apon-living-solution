import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Estates from "../pages/Estates";
import Contact from "../pages/Contact";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import EstatesDetails from "../components/Estates/EstatesDetails/EstatesDetails";
import PrivetRoutes from "./PrivetRoutes";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/estateDetails/:id",
                element: <PrivetRoutes>
                    <EstatesDetails></EstatesDetails>
                </PrivetRoutes>,

            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/estates",
                element: <Estates></Estates>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
]);

export default router;