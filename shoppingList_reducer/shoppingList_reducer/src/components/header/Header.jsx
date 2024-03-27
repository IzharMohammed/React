import React from "react";
//CSS import
import "./Header.css";

//Component import
import imageLogo from "../../assets/shopping.jpeg";

function Header() {
  return (
    <div className="header-wrapper">
      <h1 className="header-heading">Shopping List</h1>
      <div className="header-image-wrapper">
        <img className="header-image" src={imageLogo} />
      </div>
    </div>
  );
}

export default Header;
