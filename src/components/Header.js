import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const logo = "/logo.jpg"; // Assuming the logo is in the public folder
  const links = [
    { text: "Home", href: "/home" },
    { text: "Booking", href: "/booking" },
    { text: "Cancel Booking", href: "/cancel" },
  ];

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} width={100} height={30} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <Link className="nav-link" to={link.href}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;