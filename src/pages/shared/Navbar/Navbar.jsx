import React from "react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "border-b-2 rounded-br-xl p-1" : "text-white p-1")}>Home</NavLink>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <NavLink to="/menu" className={({ isActive }) => (isActive ? "border-b-2 rounded-br-xl p-1" : "text-white p-1")}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order" className={({ isActive }) => (isActive ? "border-b-2 rounded-br-xl p-1" : "text-white p-1")}>Our Shop</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black text-white sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl flex items-center"><img className="w-10" src={logo} alt="" /> Bistro Boss</a>
      </div>
      <div className="navbar-end flex gap-3">
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-3 px-1">{navOptions}</ul>
        </div>
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
