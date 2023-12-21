import React, { useState } from "react";
import "../../sections/Hero/hero.css";
import BookIcon from "../../assets/book-icon.png";

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
        <div className="numberCont">
          <div className="totals">
            <p>{totalBooksDonated + "+"} </p>
            <span className="counterTxt">Books Donated</span>
          </div>
          <div className="iconCont">
            <img src={BookIcon} alt="book icon" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationBox;
