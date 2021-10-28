import React from "react";

import "./Men.css";
// import AllShoes_Navbar from '../AllShoes_Navbar/AllShoes_Navbar';
import MenWomenFootwear from "../MenWomenFootwear/MenWomenFootwear";
import MGym from "./mGym.jpg";
import MTennis from "./mTennis.jpg";
import MJordan from "./mJordan (2).jpg";

const Men = () => {
  return (
    <div className="men">
      {/* <AllShoes_Navbar 
        title="Men's"
        pathGym="/men/gym"
        pathJordan="/men/jordan"
        pathWalking="/men/walking"
        pathFootball="/men/football"
        pathAthletics="/men/athletics"
        pathBasketball="/men/basketball"
      />
      <div className="men__shoes">
        hi
      </div> */}
      .
      <div className="men__categories">
        <MenWomenFootwear title="Mask" image={MGym} pathTo="/men/gym" />
        <MenWomenFootwear
          title="Medicine"
          image={MTennis}
          pathTo="/men/tennis"
        />
        <MenWomenFootwear
          title="Sanitizers"
          image={MJordan}
          pathTo="/men/jordan"
        />
      </div>
      .
    </div>
  );
};

export default Men;
