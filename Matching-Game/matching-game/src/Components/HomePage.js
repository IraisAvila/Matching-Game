import React from "react";

const Homepage = (params) => {
  return (
    <div>
    <div className="square">
        <img src={params.link}/>
    </div>
    <p>{params.Topic}</p>
    </div>
  );
  
};
export default Homepage;
