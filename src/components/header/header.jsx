import Link from "next/link";
import Image from "next/image";

export const Header = () => (
  <header>
    <nav className="navbar">
      <Image
        className="nav-link"
        id="nav-link-img"
        src="/images/logo_black.png"
        width={50}
        height={50}
        alt="logo"
      />
      <Link className="nav-link" href="/" passHref>
        Home
      </Link>
      <Link className="nav-link" href="/events" passHref>
        Events
      </Link>
      <Link className="nav-link" href="/about-us" passHref>
        About Us
      </Link>
    </nav>
    <h1 className="header-title">
      The best place to discover the most interesting Events worldwide!
    </h1>
  </header>
);
