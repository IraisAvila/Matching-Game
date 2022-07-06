import "./ThirdCard.css";


export default function ThirdCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }
    
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img 
        className="back" 
        src="./images/paper.webp" 
        onClick={handleClick} 
        alt="card back" 
        />
      </div>
    </div>
  )
}
