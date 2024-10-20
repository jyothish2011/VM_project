"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import UserImg from '../assets/UserImg.svg'
import Logo from "../assets/Logo.svg";

const navLinks1 = [
  {
    title: "How it works",
    path: "#How_it_works",
  },
  {
    title: "FAQ",
    path: "#FAQ",
  },
  {
    title: "For Hosts",
    path: "#For_Hosts",
  },
  {
    title: "Recent Deals",
    path: "#Recent_Deals",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#fff] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="sm:text-base  text-black font-semibold">
          <div className="flex gap-4 items-center">
            <Image src={Logo} alt="Linkedin Icon" className="mb-1" />
            <p> Book it now</p>
            <p> Name your own price</p>
          </div>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks1.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <Link
            href={"/"}
            className="sm:text-base  text-[#6D6969] font-semibold"
          >
            <div className="flex gap-4 items-center">
              <p> 100% Re booking guarentee </p>
              <p> 24/7 Support</p>
              <p>Become a Host</p>
              <Image src={UserImg} alt="user" />
            </div>
          </Link>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks1} /> : null}
    </nav>
  );
};

export default Navbar;
