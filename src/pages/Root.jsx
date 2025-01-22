import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto mt-10 text-center space-y-10">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div >
    );
};

export default Root;