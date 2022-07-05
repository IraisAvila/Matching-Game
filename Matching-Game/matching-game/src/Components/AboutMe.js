import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function AboutMe() {
  return (
    <div className="Bio">
      <h2>About Me</h2>   
      <Link to="/">
        <button>Home </button>
      </Link>
      <br></br>
 <img src="/images/irais.jpeg" />
 <p> Hello, World! I'm happy you're here! Irais and I made this app/website for my 4yr old nephew. 
     He's a very bright kid who's always looking for a challenge. I got the idea one day when playing a matching game with him on his tablet. 
     I sat back and thought to myself.. "Wow I can make a game like this with the things I already know." 
     I didn't give it much thought after that I envisioned what I wanted to make and made it! Please take your time to enjoy what I've created.
</p>
<FontAwesomeIcon onClick="www.linkedin.com" icon={faLinkedin} size="2x" />

<FontAwesomeIcon icon={faGithub} size="2x" />
<div id="linked">  
  <a href="https://www.linkedin.com/in/iraisavila/">
    <FontAwesomeIcon icon={faLinkedin} size="2x"/>      
  </a>    
</div>
</div>

  );
}