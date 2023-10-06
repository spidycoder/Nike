import { headerLogo } from "../assets/images";
import { navLinks } from "../constants/index";
import { hamburger } from "../assets/icons";
import { useState } from "react";
const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Nike-logo"
            width={130}
            className="mr-2"
            height={35}
          />
        </a>
        <ul className="flex justify-between items-center gap-16 max-lg:hidden">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <a
                href={navLink.href}
                className="font-montserrat leading-normal text-[25px] text-slate-gray"
              >
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <img src={hamburger} width={24} height={24} onClick={toggleLinks} />
          {showLinks && (
            <ul>
              {navLinks.map((navLink) => (
                <li key={navLink.label}>
                  <a
                    href={navLink.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {navLink.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
