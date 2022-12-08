import React from "react";
import footworks from "../assets/images/thefootworks deployed.png";
import weatherDashboard from "../assets/images/weatherImg.jpg";
import codeQuiz from "../assets/images/quizImg.jpg";
import dayPlanner from "../assets/images/plannerImg.jpg";

const ProjectsPage = () => {
  return (
    <main>
      <section id="myProjects">
        {/* <!-- Project cards --> */}
        <h2>My Projects</h2>
        <div class="cards">
          <div class="cardFlex">
            <div class="restOfCards">
              <figure class="projectCard">
                {/* <!-- Password generator project --> */}
                <a
                  href="https://ethandmello.github.io/password-generator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    class="projectCardImg"
                    src={footworks}
                    alt="Screenshot of the deployed application Thefootworks"
                  />
                </a>
                <figcaption>The Foot Works (Project 2)</figcaption>
              </figure>
              <figure class="projectCard">
                {/* <!-- Weather dashboard project --> */}
                <a
                  href="https://ethandmello.github.io/Weather-App/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    class="projectCardImg"
                    src={weatherDashboard}
                    alt="Weather Dashboard"
                  />
                </a>
                <figcaption>Weather Dashboard</figcaption>
              </figure>
              <figure class="projectCard">
                {/* <!-- code quiz project --> */}
                <a
                  href="https://ethandmello.github.io/code-quiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img class="projectCardImg" src={codeQuiz} alt="Code Quiz" />
                </a>
                <figcaption>Code Quiz</figcaption>
              </figure>
              <figure class="projectCard">
                {/* <!-- day planner project --> */}
                <a
                  href="https://ethandmello.github.io/work-day-scheduler/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    class="projectCardImg"
                    src={dayPlanner}
                    alt="Day Planner"
                  />
                </a>
                <figcaption>Day Planner</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
