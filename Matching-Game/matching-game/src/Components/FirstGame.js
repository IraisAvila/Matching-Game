import React from "react";
import '../App.css'
import { useState } from "react";

const cardImages = [
  { "src": "/images/batman-1.png" },
  { "src": "/images/superman-1.png" },
  { "src": "/images/hulk-1.png" },
  { "src": "/images/flash-1.png" },
  { "src": "/images/thor-1.png" },
  { "src": "/images/captainamerica-1.png" },
  { "src": "/images/spiderman-1.png"},
  { "src": "/images/ironman-1.png"},
  { "src": "/images/wonderwoman-1.png"},
  { "src": "/images/aquaman-1.png"},
]
 function FirstGame() {
   const [cards, setCards] = useState([])

   //Shuffle cards
   const shuffleCards = () => {
     //Spread Syntax:It expands the array into individual elements. So, it can be used to expand the array in a places where zero or more elements are expected. 
     const shuffledCards = [ ...cardImages, ...cardImages]
     //.sort:The sort() overwrites the original array. Sorts the elements as strings in alphabetical and ascending order.
     .sort(() => Math.random() -0.5)
     //.map:creates a new array from calling a function for every array element. 
     .map((card) => ({...card, id: Math.random() }))

     setCards(shuffledCards)
   }
   console.log(cards)

   return (
     <div className="Hero">
   <h2>Matching Game 1</h2>
   <button onClick={shuffleCards}>Start</button>
   
   <div className ="card-grid">
     {cards.map(card => (
       <div className="card" key={card.id}>
         <div>
           <img className="front" src={card.src} alt= "card front" />
           <img className="back" src="/images/gray.png" alt="card back" />
         </div>
       </div>
     ))}
   </div>
   </div>
   );

 }

 export default FirstGame;

