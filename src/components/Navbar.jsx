import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/avatar.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Logo Project
        </Link>
      </span>
      <ul className="list">
        <li className="listItem">
          <img src={avatar} alt="" className="avatar" />
        </li>
        <li className="listItem">User Name</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
