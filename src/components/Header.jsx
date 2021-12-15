import React from "react";
import Typerwriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <section id="home" className="page-section">
      <div className="container">
        <div
          className="
      home-content
      row
      d-flex
      justify-content-between
      align-items-center
      mx-auto
    "
        >
          <Fade delay={2800} duration={2000}>
            <div className="home-text-area col col-12 col-lg-6">
              <h1 className="h1 home-text--heading display-1">
                What's good? I'm Gerald.
              </h1>
              <h3 className="home-text--subheading h3">
                <Typerwriter
                  options={{
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("Frontend Developer...")
                      .pauseFor(300)
                      .deleteChars(23)
                      .pauseFor(300)
                      .typeString("Combining creativity with the Frontend.")
                      .pauseFor(300)
                      .start();
                  }}
                />
              </h3>
              <p className="home-text--info lead">
                I'm an entry level front-end developer.
                An individual who is not afraid to take the intiative and do what's neccessary to get the job done.
                I'm relentlessly improving my skills and coding knowledge set on a daily basis.
                I'm a great communicator, professional, hard-working, and an all around fun person to be around.
                I'd add tremendous value to any team I'm assigned to.
                Enjoy the site!
              </p>
            </div>
            <div className="home-img-area col col-12 col-lg-6">
              <img
                src="img/ashe.jpg" width="568" height="354"
                alt=""
                className="img-fluid home-img--hand"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Header;
