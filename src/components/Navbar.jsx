import { Link, NavLink } from "react-router-dom";
import userPic from '../assets/user.png'
import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";


const Navbar = () => {
    const { user, logOut } = useContext(AuthProvider)

    const handleLogout = e => {
        e.preventDefault()
        logOut()
            .then(() => {
                console.log('sign out success')
            })
            .catch(error => {
                console.log(error)
            })
    }
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/estates">Estates</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/us"> Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <h2 className="text-4xl font-bold"><span className="text-green-800 text-center">Apon</span> <br /> Living Solution</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link>
                    <img className="mr-5" src={userPic} alt="" />
                </Link>
                <div>
                    {
                        user ? <button onClick={handleLogout} className="btn btn-neutral">Sign Out</button> : <Link to="/login">
                            <button className="btn
                    btn-neutral">Login</button>
                        </Link>
                    }

                </div>

            </div>
        </div>
    );
};

export default Navbar;