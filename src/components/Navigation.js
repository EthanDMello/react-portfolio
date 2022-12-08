import React from "react";

function Navigation() {
  return (
    <>
      <nav>
        {/* <!-- Navigation section --> */}
        <div className="links">
          <a className="navLinks" href="/aboutMe">
            About Me
          </a>
          <a className="navLinks" href="/Projects">
            My Projects
          </a>
          <a className="navLinks" href="/contactMe">
            Contact Me
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
