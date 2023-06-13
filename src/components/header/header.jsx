import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavActive(!isNavActive);
  };

  const handleNavLinkClick = () => {
    setIsNavActive(false);
  };
  return (
    <header>
      <nav className="navbar">
        <Image
          className="nav-link-img"
          src="/images/logo_black.png"
          width={100}
          height={50}
          alt="logo"
        />
        <div className="space-between-logo-and-nav-links-navbar"></div>
        <div className={`nav-menu ${isNavActive ? "active" : ""}`}>
          <Link className="nav-link" href="/" passHref onClick={handleNavLinkClick}>
            Home
          </Link>
          <Link className="nav-link" href="/events" passHref onClick={handleNavLinkClick}>
            Events
          </Link>
          <Link className="nav-link" href="/about-us" passHref onClick={handleNavLinkClick}>
            About Us
          </Link>
        </div>
        <div className={`hamburger ${isNavActive ? "active" : ""}`} onClick={handleHamburgerClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <h1 className="header-title">
        The best place to discover the most interesting Events worldwide!
      </h1>
    </header>
  );
};
