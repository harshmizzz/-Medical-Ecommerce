import React from "react";

// import './MenTennis.css';
import AllShoes_Navbar from "../../AllShoes_Navbar/AllShoes_Navbar";
import ShoeComponent from "../../ShoeComponent/ShoeComponent";
import AllShoes from "../../AllShoes.css";

import Lite2 from "./lite2.jpg";
import ZoomX from "./zoomX.jpg";
import ZoomTurbo from "./zoomTurbo.jpg";
import VaporWing from "./vaporWing.jpg";

const MenTennis = () => {
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
          image={Lite2}
          id="200000"
          title="I Tone Eye Drops 10ml"
          before={70}
          after={55}
          category="Medicines"
        />
        <ShoeComponent
          image={ZoomX}
          id="200001"
          title="Tentex Forte Tablet 10'S"
          before={185}
          after={150}
          category="Medicines"
        />
        <ShoeComponent
          image={ZoomTurbo}
          id="200002"
          title="Dr. Batra's Homeo+ Immunity Medicine Oral Drops 30 ml"
          before={170}
          after={170}
          category="Medicines"
        />
        <ShoeComponent
          image={VaporWing}
          id="200003"
          title="
          LIV 52 DS Tablet 60'S"
          before={90}
          after={65}
          category="Medicines"
        />
      </div>
    </div>
  );
};

export default MenTennis;
