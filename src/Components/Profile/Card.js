import React from "react";
import Adress from "./Adress";
import FullName from "./FullName";
import ProfilPhoto from "./ProfilPhoto";
const card = () => (
  <div
    className="card"
    style={{ width: "18rem", background: "rgba(0,0,0,0.5)", color: "white" }}
  >
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
        <i className="fab fa-facebook fa-2x"></i>
      </a>
      <a
        href="https://github.com/SaberGuirat"
        className="card-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github fa-2x"></i>
      </a>
    </div>
  </div>
);

export default card;
