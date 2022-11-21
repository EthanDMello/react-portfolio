import React from "react";
import Nav from "./Navigation";

function Header() {
  return (
    <header>
      {/* <!-- Header with name --> */}
      <div class="header">
        <h1>Ethan D'Mello</h1>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
