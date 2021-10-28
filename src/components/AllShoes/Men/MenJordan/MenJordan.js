import React from "react";

// import './MenJordan.css';
import AllShoes_Navbar from "../../AllShoes_Navbar/AllShoes_Navbar";
import ShoeComponent from "../../ShoeComponent/ShoeComponent";
import AllShoes from "../../AllShoes.css";

import AirMid from "./airMid.jpg";
import AirOg from "./airOg.jpg";
import Jumpman from "./jumpman.jpg";

const MenJordan = () => {
  return (
    <div className="allShoes">
      <AllShoes_Navbar
        title="Men's"
        pathGym="/men/gym"
        pathJordan="/men/jordan"
        pathWalking="/men/running"
        pathFootball="/men/football"
        pathAthletics="/men/tennis"
        pathBasketball="/men/basketball"
      />
      <div className="allShoes__shoes">
        <ShoeComponent
          image={AirMid}
          id="300000"
          title="Shake HandZ-E Alcohol Hand Rub 5 litre"
          before={140}
          after={140}
          category="Sanitizers"
        />
        <ShoeComponent
          image={AirOg}
          id="300001"
          title="Dettol Liquid Handwash - Original (Pack of 3 x 175 ml)"
          before={140}
          after={125}
          category="Sanitizers"
        />
        <ShoeComponent
          image={Jumpman}
          id="300002"
          title="Shake HandZ-E Alcohol Hand Rub With Pump 500 ml"
          before={100}
          after={85}
          category="Sanitizers"
        />
      </div>
    </div>
  );
};

export default MenJordan;
