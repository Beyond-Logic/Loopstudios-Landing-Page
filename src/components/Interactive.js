import React from "react";
import "../components/Interactive.css";

function Interactive() {
  return (
    <div className="container interactive-section">
      <div className="row interactive-section-row">
        <div className="col-lg-7">
          <div className="interact-image">
            <img
              src={
                "http://localhost:3000/static/media/image-interactive.1d330522.jpg"
              }
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="interactive-vr">
            <h1>The leader in interactive VR</h1>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interactive;
