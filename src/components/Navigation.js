import React from "react";

function Navigation() {
  return (
    <>
      <nav>
        {/* <!-- Navigation section --> */}
        <div className="links">
          <a className="navLinks" href={process.env.PUBLIC_URL + "/aboutMe"}>
            About Me
          </a>
          <a className="navLinks" href={process.env.PUBLIC_URL + "/Projects"}>
            My Projects
          </a>
          <a className="navLinks" href={process.env.PUBLIC_URL + "/contactMe"}>
            Contact Me
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
