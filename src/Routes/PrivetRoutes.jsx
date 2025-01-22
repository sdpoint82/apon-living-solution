import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthProvider)
    const location = useLocation()
    console.log(location.pathname)

    if (loading) {
        return <div className="flex justify-center mx-auto">
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoutes;