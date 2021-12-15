import React, { useState, useEffect } from "react";

const Popup = (props) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const int = setTimeout(() => {
      setShowModal(true);
    }, 7000);

    return () => clearTimeout(int);
  }, []);

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <section
      className={
        showModal
          ? "socials-modal socials-modal--visible"
          : "socials-modal socials-modal--hidden"
      }
    >
      <div className="socials-modal-close d-flex justify-content-end">
        <i onClick={hideModal} className="fas fa-times-circle" />
      </div>
      <div className="container modal-popup">
        <div className="row socials-container">
          <div className="socials-text col col-12 col-lg-6">
            <div className="socials-logo">
              
              <h1 className="l-text yeah">Gerald Craig</h1>
            </div>
            <div className="socials-info yeah">
              <h2>Check out my social media!</h2>
              <p className="my-info yeah">
                Don't be surprised if you see content about finance regarding daytrading, crypto, stocks, bonds, investing, etc.
              </p>
              <div className="links">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gerald-craig-185bb021b/"
                  className="linkedin social-link"
                >
                  <i className="fab fa-linkedin yeah" />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/yeahgc"
                  className="github social-link yeah"
                >
                  <i className="fab fa-github-square" />
                </a>
                <a
                  target="_blank"
                  href="https://www.behance.net/geraldcraig"
                  className="behance social-link"
                >
                  <i className="fab fa-behance-square yeah" />
                </a>
              </div>
              <div className="social-exit">
                <a onClick={hideModal} href="#" className="no-thanks yeah">
                  No thanks, take me back to the site.
                </a>
              </div>
            </div>
          </div>
          <div className="socials-img col col-12 col-lg-6 yeah">
            <img
              src="/img/social-media-marketing.png"
              alt=""
              className="s-img img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popup;
