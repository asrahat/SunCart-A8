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
          ? "btn bg-[#FF9F1C] hover:bg-[#FB8500] border-none text-white rounded-full px-8"
          : "hover:bg-base-200 hover:text-[#FF9F1C]"
      }`}
    >
      {children}
    </Link>;
};

export default MyLink;
