"use client";

import Head from "next/head";
import Link from "next/link";
import Logo from "./Logo";
import { YoutubeIcon, FacebookIcon, LinkedinIcon, MoonIcon, SunIcon, InstagramIcon } from "../Icons";
import siteMetadata from "@/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <>
      {/* Adding Head component with meta tags */}
      <Head>
        <title>Galaxy Education | Study Visa Consultant</title>
        <meta name="description" content="Study visa consultant platform powered by Next.js, Tailwind CSS, and sanity." />

        {/* Open Graph (Facebook, LinkedIn) Meta Tags */}
        <meta property="og:title" content="Galaxy Education | Study Visa Consultant" />
        <meta property="og:description" content="Get expert study visa consultancy with Galaxy Education." />
        <meta property="og:image" content="https://www.galaxyeducation.org/path-to-your-image.jpg" />
        <meta property="og:url" content="https://www.galaxyeducation.org/" />
        <meta property="og:type" content="website" />

        {/* Facebook-specific meta tag */}
        <meta property="fb:app_id" content="your-facebook-app-id" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galaxy Education | Study Visa Consultant" />
        <meta name="twitter:description" content="Get expert study visa consultancy with Galaxy Education." />
        <meta name="twitter:image" content="https://www.galaxyeducation.org/path-to-your-image.jpg" />
      </Head>

      <header className="w-full fixed top-0 left-0 z-50 p-4 px-5 sm:px-10 flex items-center justify-between bg-white dark:bg-dark backdrop-blur-lg shadow-md">
        {/* Logo Section */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
          <div className="w-6 cursor-pointer transition-all ease duration-300">
            <div className="relative">
              <span
                className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                style={{
                  transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)",
                }}
              />
              <span
                className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                style={{
                  opacity: click ? 0 : 1,
                }}
              />
              <span
                className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                style={{
                  transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)",
                }}
              />
            </div>
          </div>
        </button>

        {/* Mobile Navigation */}
        <nav
          className={`${
            click ? "translate-x-0" : "translate-x-full"
          } w-full sm:w-max h-screen fixed top-0 right-0 z-40 bg-white dark:bg-dark flex flex-col items-center justify-center transition-transform duration-300 sm:hidden`}
        >
          <button
            className="absolute top-8 right-8 text-3xl"
            onClick={toggle}
            aria-label="Close Menu"
          >
            &times;
          </button>
          <ul className="flex flex-col items-center space-y-6 text-lg  bg-light/80 backdrop-blur bg-light text-dark -sm z-40 transition-all  duration-300  border-dark rounded-full font-medium capitalize items-center flex flex-col sm:hidden
          fixed left-0 right-0 mx-auto bg-light/80 backdrop-blur-sm z-40 transition-all ease duration-300">
            <li>
              <Link href="/" onClick={toggle}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/uni" onClick={toggle}>
                Universities
              </Link>
            </li>
            <li>
              <Link href="/courses" onClick={toggle}>
                Courses
              </Link>
            </li>
            <li>
              <Link href="/success" onClick={toggle}>
                Success Stories
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggle}>
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-8 h-8 mt-8 ease flex items-center justify-center rounded-full p-2",
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            )}
            aria-label="theme-switcher"
          >
            {mode === "light" ? <MoonIcon className="fill-dark" /> : <SunIcon className="fill-dark" />}
          </button>
        </nav>

        {/* Desktop Navigation */}
        <nav
          className="hidden sm:flex items-center justify-between w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize bg-light/80 dark:bg-dark/80 backdrop-blur-sm z-40"
        >
          <Link href="/" className="mx-2">
            Home
          </Link>
          <Link href="/uni" className="mx-2">
            Universities
          </Link>
          <Link href="/courses" className="mx-2">
            Courses
          </Link>
          <Link href="/success" className="mx-2">
            Success Stories
          </Link>
          <Link href="/contact" className="mx-2">
            Contact
          </Link>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            )}
            aria-label="theme-switcher"
          >

            {mode === "light" ? (
              <MoonIcon className="fill-dark" />
            ) : (
              <SunIcon className="fill-dark" />
            )}         
           </button>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden sm:flex items-center space-x-4">
          <a href={siteMetadata.linkedin} rel="noopener noreferrer" target="_blank">
            <LinkedinIcon className="w-6 h-6 hover:scale-125 transition-all ease duration-200" />
          </a>
          <a href={siteMetadata.facebook} rel="noopener noreferrer" target="_blank">
            <FacebookIcon className="w-6 h-6 hover:scale-125 transition-all ease duration-200" />
          </a>
          <a href={siteMetadata.youtube} rel="noopener noreferrer" target="_blank">
            <YoutubeIcon className="w-6 h-6 hover:scale-125 transition-all ease duration-200" />
          </a>
          <a href={siteMetadata.instagram} rel="noopener noreferrer" target="_blank">
            <InstagramIcon className="w-6 h-6 hover:scale-125 transition-all ease duration-200" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;