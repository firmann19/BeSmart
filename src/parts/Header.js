import React from "react";
import BrandIcon from "./BrandIcon";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";
import Image from "react/image"

function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                <Image
                  src="../assets/images/BeSmart-modified 1.png"
                  width={60}
                  height={60}
                  alt="logo besmart"
                />
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/service")}`}>
                <Button className="nav-link" type="link" href="/service">
                  Service
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/portofolio")}`}>
                <Button className="nav-link" type="link" href="/portofolio">
                  Portofolio
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/contact-us")}`}>
                <Button className="nav-link" type="link" href="/contact-us">
                  Contact Us
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
