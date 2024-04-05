import Link from "next/link";
import React from "react";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaAlignJustify,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = () => {
  return (
    <div className="flex gap-2">
      <Link
        className="btn btn-sm btn-circle btn-ghost md:btn-md"
        href="https://github.com/kaisjessa"
        passHref
      >
        <FaGithub className="size-6 md:size-8" />
      </Link>
      <Link
        className="btn btn-sm btn-circle btn-ghost md:btn-md"
        href="https://www.linkedin.com/in/kais-jessa/"
        passHref
      >
        <FaLinkedin className="size-6 md:size-8" />
      </Link>
      <Link
        className="btn btn-sm btn-circle btn-ghost md:btn-md"
        href="mailto:kaisjessa@gmail.com"
        passHref
      >
        <MdEmail className="size-6 md:size-8" />
      </Link>
    </div>
  );
};

const DropdownMenu = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex gap-2">
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
          <FaAlignJustify className="size-6 md:size-10 black" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Work Experience</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const NavButtons = () => {
  return (
    <div className="navbar-center">
      <ul className="menu menu-horizontal px-1 font-semibold text-lg">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Work Experience</a>
        </li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <header className="navbar z-20 bg-base-100 sticky top-0 bg-opacity-100">
      <div className="navbar bg-base">
        <div className="navbar-start">
          <span className="lg:hidden">
            <DropdownMenu />
          </span>
          <span className="hidden lg:flex">
            <Socials />
          </span>
        </div>
        <div className="navbar-center">
          <span className="flex lg:hidden">
            <Socials />
          </span>
          <span className="hidden lg:flex">
            <NavButtons />
          </span>
        </div>
        <div className="navbar-end">
          <FaSun className="m-1 size-5 md:size-8" />
          <input
            type="checkbox"
            value="dark"
            className="toggle toggle-sm theme-controller md:toggle-md"
          />
          <FaMoon className="m-1 size-5 md:size-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;
