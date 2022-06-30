import React from "react";
import { Link } from "react-router-dom"
function Links() {

  return (
    <div className="links">
      <div className="link-item"><span className="nav-logo"><Link to="/hero">Superheros</Link></span></div>
      <div className="link-item"><Link to="/video">Video Game Characters</Link></div>
      <div className="link-item"><Link to="/animal">Animals</Link></div>
      <div className="link-item"><Link to="/about">About</Link></div>
   </div>
  );
}

export default Links