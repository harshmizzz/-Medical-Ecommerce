import React from "react";

// import './MenGym.css';
import AllShoes_Navbar from "../../AllShoes_Navbar/AllShoes_Navbar";
import ShoeComponent from "../../ShoeComponent/ShoeComponent";
import AllShoes from "../../AllShoes.css";

import Metcon6 from "./metcon6.jpg";
import AirMonarch from "./airMonarch.jpg";
import MatFraser from "./matFraser.jpg";
import MaxAlpha from "./maxAlpha.jpg";
import AirZoom from "./airZoom.jpg";
import Romaleos4 from "./romaleos4.jpg";

const MenGym = () => {
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
          id="100000"
          image={Metcon6}
          title="Nirvana Mask"
          before={100}
          after={80}
          category="MASK"
        />
        <ShoeComponent
          id="100001"
          image={Romaleos4}
          title="Ishital Mask"
          before={240}
          after={200}
          category="MASK"
        />
        <ShoeComponent
          id="100002"
          image={AirZoom}
          title="Flexi Mask"
          before={130}
          after={130}
          category="MASK"
        />
        <ShoeComponent
          id="100003"
          image={MatFraser}
          title="LivinGuard Face Mask"
          before={190}
          after={190}
          category="MASK"
        />
        <ShoeComponent
          id="100004"
          image={AirMonarch}
          title="BabyMask"
          before={70}
          after={60}
          category="MASK"
        />
        <ShoeComponent
          id="100005"
          image={MaxAlpha}
          title="Livinguard Full Mask"
          before={100}
          after={100}
          category="MASK"
        />
      </div>
    </div>
  );
};

export default MenGym;
