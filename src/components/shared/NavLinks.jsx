'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
    const pathname = usePathname();
  return  <Link
      href={href}
      className={`px-4 py-2 rounded-full font-medium transition-all duration-300
      ${
        pathname === href
          ? "bg-primary text-white shadow-md"
          : "hover:bg-base-200 hover:text-primary"
      }`}
    >
      {children}
    </Link>;
};

export default MyLink;
