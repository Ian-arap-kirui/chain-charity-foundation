import React from "react";
import "./hero.css";
import PalmBg from "../../assets/handprint-svg.png";
import HeroBg from "../../assets/hero-bg.jpg";
import Logo from "../../assets/chain-chairity-logov1.svg";
import DonationBox from "../../components/DonationBox/DonationBox";

const Hero = () => {
  return (
    <section className="hero">
      <img src={Logo} alt="logo" className="logo" loading="lazy" />
      <div className="hero-container">
        <div className="hero-left-content">
          <h1 className="hero-header">
            Book Donation <br />
            Drive
          </h1>
          <p className="hero-subtitle">
            Donate any new or gently used books. <br />
            Let's help public primary school kids discover a brighter future.
          </p>
          <span>
            {" "}
            Call and We'll Pick 'Em <br />{" "}
          </span>
          <a href="tel:0742311256" className="button-55">
            0742311256
          </a>
          <img
            src={PalmBg}
            alt="Book Donation Drive"
            className="hero-image"
            loading="lazy"
          />
        </div>
        <div className="hero-right-content">
          <img
            src={HeroBg}
            alt="Book Donation Drive Hero Image"
            className="hero1-image"
            loading="lazy"
          />
          <DonationBox />
        </div>
      </div>
    </section>
  );
};

export default Hero;
