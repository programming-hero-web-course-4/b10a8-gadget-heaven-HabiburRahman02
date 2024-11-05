import { Link, NavLink, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { ProductContext } from "../../provider/ProductProvider";

const Navbar = () => {
    const { carts, lists } = useContext(ProductContext);
    const location = useLocation();
    const navStyle = location.pathname === '/';

    const links = <>
        <NavLink className={({ isActive }) => `font-semibold text-base mr-6 ${isActive && navStyle && 'text-yellow-300'}`} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => `font-semibold text-base mr-6 ${isActive && 'text-red-600'}`} to='/statistics'>Statistics</NavLink>
        <NavLink className={({ isActive }) => `font-semibold text-base mr-6 ${isActive && 'text-red-600'}`} to='/dashboard'>Dashboard</NavLink>
        <NavLink className={({ isActive }) => `font-semibold text-base mr-6 ${isActive && 'text-red-600'}`} to='/feedback'>Feedback</NavLink>
    </>
    return (
        <div className="fixed z-50 w-full backdrop-blur-3xl">
            <div className={`navbar max-w-[1400px] rounded-t-3xl mx-auto ${navStyle && 'bg-[#9538E2] text-white'}`}>
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
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl font-semibold">Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/*  */}

                    <div>
                        <Link to='/dashboard'>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
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
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">{carts.length}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="dropdown dropdown-end">
                            <Link to='/dashboard'>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <FaRegHeart className="h-5 w-5"></FaRegHeart>
                                        <span className="badge badge-sm indicator-item">{lists.length}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;