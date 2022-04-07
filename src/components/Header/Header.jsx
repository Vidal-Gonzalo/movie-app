import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie app</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}
