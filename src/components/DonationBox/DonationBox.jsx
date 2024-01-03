import React, { useState } from "react";
import "../../sections/Hero/hero.css";
import BookIcon from "../../assets/book-icon.png";
import ProgressBar from "../ProgressBar/ProgressBar";

const DonationBox = () => {
  const [totalBooksDonated, setTotalBooksDonated] = useState(20);

  const updateCounter = () => {
    setTotalBooksDonated((prevCount) => prevCount + 1);
  };
  return (
    <div className="donationBox">
      <span>
        <p>&copy; 2023 Chain Charity Foundation. All rights reserved.</p>
      </span>
      <div className="counter">
        {" "}
        <div className="top">
          <p className="counterTitle">Book Donation Drive</p>
          <div className="innerTop">
            <div className="numCont">
              <p className="counterSub1">Raised </p>
              <span>{totalBooksDonated}</span>
            </div>
            <div className="numCont">
              <p className="counterSub1">Donations </p>
              <span>{totalBooksDonated}</span>
            </div>
            <div className="numCont">
              <p className="counterSub1">Goal </p>
              <span>1234</span>
            </div>
          </div>
        </div>
        <div className="mid">
          {" "}
          <ProgressBar />
        </div>
        <p className="donationSummary">1234 Books Donated of 1234 goal</p>
        <div className="donationBtn">
          {" "}
          <a href="tel:0742311256" className="donationBtn">
            Donate
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationBox;
