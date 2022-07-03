import React from "react";
import '../App.css'
import { useState } from "react";
import SingleCard from "./SingleCard";
import { useEffect } from "react";

const cardImages = [
  { "src": "/images/batman-1.png", matched: false },
  { "src": "/images/superman-1.png", matched: false },
  { "src": "/images/hulk-1.png", matched: false },
  { "src": "/images/flash-1.png", matched: false },
  { "src": "/images/thor-1.png", matched: false },
  { "src": "/images/captainamerica-1.png", matched: false },
  { "src": "/images/spiderman-1.png", matched: false },
  { "src": "/images/ironman-1.png", matched: false },
  { "src": "/images/wonderwoman-1.png", matched: false },
  { "src": "/images/aquaman-1.png", matched: false }
]
 function FirstGame() {
   const [cards, setCards] = useState([])
   const [choiceOne, setChoiceOne] = useState(null)
   const [choiceTwo, setChoiceTwo] = useState(null)

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

   //Handle a choice
   const handleChoice = (card) => {
     choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
   }

   //Compare 2 selected cards
   useEffect(() => {
     if (choiceOne && choiceTwo) {

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return{...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        resetTurn()
      }
     }
   }, [choiceOne, choiceTwo])

   console.log(cards)

// Reset choices
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
}
   return (
     <div className="Hero">
   <h2>Matching Game 1</h2>
   <button onClick={shuffleCards}>Start</button>
   
   <div className ="card-grid">
     {cards.map(card => (
       <SingleCard 
       key={card.id} 
       card={card} 
       handleChoice={handleChoice}
       flipped={card === choiceOne || card === choiceTwo || card.matched}
       />

     ))}
   </div>
   </div>
   );

 }

 export default FirstGame;

