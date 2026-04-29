import React from "react";
import MyLink from "./NavLinks";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/products",
      text: "Products",
    },
    {
      path: "/profile",
      text: "My Profile",
    },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur">
      <div className="navbar container mx-auto px-4">
        
  
        <div className="navbar-start">
       
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-base-100 rounded-2xl w-56 space-y-2"
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <MyLink href={item.path}>{item.text}</MyLink>
                </li>
              ))}
            </ul>
          </div>

    
          <Link
            href="/"
            className="flex items-center gap-3 hover:scale-[1.02] duration-300"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={45}
              className="rounded-full"
            />

            {/* <div>
              <h1 className="text-xl font-bold tracking-wide">
                SunCart
              </h1>
              <p className="text-xs text-gray-500 -mt-1">
                Summer Essentials
              </p>
            </div> */}
          </Link>
        </div>

  
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <MyLink href={item.path}>{item.text}</MyLink>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="navbar-end gap-3">
          <Link href="/login">
            <button className="btn btn-primary rounded-full px-6 text-white">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="btn btn-primary rounded-full px-6 text-white">
            Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;