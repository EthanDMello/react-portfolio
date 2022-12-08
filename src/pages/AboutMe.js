import React from "react";
import ethanImage from "../assets/images/ethID.jpg";

const AboutMe = () => {
  return (
    <main>
      <h2 id="aboutMeHeader">About Me</h2>
      <section id="aboutMe">
        {/* <!-- About me and picture --> */}
        <div class="text">
          <p>
            Self motivated web developer utilising a 6 month bootcamp and
            previous computer science studies to understand and create web
            applications. Passionate about learning and understanding different
            technologies while also being determined to produce high quality
            work in good time. My strengths are in creativity, teamwork,
            patience and problem solving.
          </p>
        </div>
        <div class="pp">
          <img
            class="profilePicture"
            src={ethanImage}
            alt="Photo of Ethan D'Mello"
          />
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
