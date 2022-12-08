import React from "react";

const ContactMe = () => {
  return (
    <main>
      <section id="contactMe">
        {/* <!-- Contact me --> */}
        <h2>Contact Me</h2>
        <ul>
          {/* <!-- Contact list with links --> */}
          <li>
            <span class="bold">Email:</span>
            <a href="mailto:e.n.dmello@live.com"> e.n.dmello@live.com</a>
          </li>
          <li>
            <span class="bold"> LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/ethan-dmello/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <span class="bold">Github:</span>
            <a
              href="https://github.com/EthanDMello"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/EthanDMello
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ContactMe;
