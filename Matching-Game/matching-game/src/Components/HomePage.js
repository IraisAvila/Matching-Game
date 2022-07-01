import React from "react";
import { Link } from "react-router-dom";

const Homepage = (params) => {
  return (
    <div>
        <div className="square">
            <Link to={params.site}>
                <img src={params.link}/>
            </Link>
        </div>
        <p>{params.Topic}</p>
    </div>
  );
  
};
export default Homepage;
