import React from "react";
import Adress from "./Adress";
import FullName from "./FullName";
import ProfilPhoto from "./ProfilPhoto";
const card = () => (
  <div className="card" style={{ width: "18rem" }}>
    <ProfilPhoto />
    <div className="card-body">
      <FullName />
      <Adress />
    </div>
    <div className="card-body">
      <a
        href="https://www.facebook.com/saber.guirat/"
        className="card-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        href="https://github.com/SaberGuirat"
        className="card-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>
);

export default card;
