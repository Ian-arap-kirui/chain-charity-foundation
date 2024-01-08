import React, { useState } from "react";
import "../../sections/Hero/hero.css";
import BookIcon from "../../assets/book-icon.png";
import ProgressBar from "../ProgressBar/ProgressBar";

const DonationBox = () => {
  const [totalBooksRaised, setTotalBooksRaised] = useState(20000);
  const [totalBooksDonated, setTotalBooksDonated] = useState(300);
  const [target, setTarget] = useState(1000);
  const currentYear = new Date().getFullYear();

  const percentage = (totalBooksDonated / target) * 100;
  const updateCounter = () => {
    setTotalBooksDonated((prevCount) => prevCount + 1);
  };
  return (
    <div className="donationBox">
      <span>
        <p>
          &copy; {currentYear} Chain Charity Foundation. All rights reserved.
        </p>
      </span>
      <div className="counter">
        {" "}
        <div className="top">
          <p className="counterTitle">
            Book Donation <br />
            Drive
          </p>
          <div className="innerTop">
            <div className="numCont">
              <p className="counterSub1">Raised </p>
              <span>{totalBooksRaised}</span>
            </div>
            <div className="numCont">
              <p className="counterSub1">Donations </p>
              <span>{totalBooksDonated}</span>
            </div>
            <div className="numCont">
              <p className="counterSub1">Goal </p>
              <span>{target}</span>
            </div>
          </div>
        </div>
        <div className="mid">
          {" "}
          <ProgressBar percentage={percentage} />
        </div>
        <p className="donationSummary">
          {totalBooksDonated} Books Donated of {target} goal
        </p>{" "}
        <a href="tel:0742311256" className="donationBtn">
          Donate
        </a>
      </div>
    </div>
  );
};

export default DonationBox;
