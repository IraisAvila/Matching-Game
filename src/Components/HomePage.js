import React from "react";
import { Link } from "react-router-dom";

const Homepage = (params) => {
  return (
    <div>
        <div className="square">
            <Link to={params.site}>
                <img className="picture" src={params.link}/>
            </Link>
        </div>
        <h3>{params.Topic}</h3>
    </div>
  );
  
};
export default Homepage;
