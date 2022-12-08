import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav>
        {/* <!-- Navigation section --> */}
        <div className="links">
          <Link className="navLinks" to="/aboutMe">
            About Me
          </Link>
          <Link className="navLinks" to="/Projects">
            My Projects
          </Link>
          <Link className="navLinks" to="/contactMe">
            Contact Me
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
