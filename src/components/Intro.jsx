import React from "react";
import about from "../assets/img/aboutme.JPG";
import { introText } from "../constants";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h1 className="intro__title">{introText.title}</h1>
        <div className="intro__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="intro__text">
          <div className="text">
            {introText.desc.map((text, id) => (
              <div key={id}>{text}</div>
            ))}
          </div>
          <div className="img">
            <img src={about} alt="어바웃" />
          </div>
        </div>
        <div className="intro__lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
