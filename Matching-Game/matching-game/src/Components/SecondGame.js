import React from "react";
import "../App.css";
import { useState } from "react";
import { useEffect } from "react";
import SecondCard from "./SecondCard";
import { Link } from "react-router-dom";

const cardImages = [
  { src: "/images/link.png", matched: false },
  { src: "/images/kirby.png", matched: false },
  { src: "/images/mario.png", matched: false },
  { src: "/images/fallout.png", matched: false },
  { src: "/images/sonic.png", matched: false },
  { src: "/images/yoshi.png", matched: false },
  { src: "/images/isabelle.png", matched: false },
  { src: "/images/chicken.png", matched: false },
  { src: "/images/master.png", matched: false },
  { src: "/images/pikachu.png", matched: false },
];
function SecondGame() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //Shuffle cards
  const shuffleCards = () => {
    //Spread Syntax:It expands the array into individual elements. So, it can be used to expand the array in a places where zero or more elements are expected.
    const shuffledCards = [...cardImages, ...cardImages]
      //.sort:The sort() overwrites the original array. Sorts the elements as strings in alphabetical and ascending order.
      .sort(() => Math.random() - 0.5)
      //.map:creates a new array from calling a function for every array element.
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards);
  };

  //Handle a choice
  const handleChoice = (card) => {
    // Stop the user from being able to click the first card twice
    if(card.id === choiceOne?.id) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //Compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1100);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  // Reset choices
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };
  // Start Game Automatically
  useEffect(() => {
    shuffleCards()

  }, [])
  return (
    <div className="Video">
      <button onClick={shuffleCards}>New Game</button>
      <Link to="/"><button>Home </button></Link>
      <h2>Video Game Matching</h2>

      <div className="card-grid">
        {cards.map((card) => (
          <SecondCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default SecondGame;
