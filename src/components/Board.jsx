import React, { useState } from "react";
import Card from "./Card.jsx";
import "./Board.css";

const Board = () => {
  const [cards, setCards] = useState(shuffleCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  
  function shuffleCards() {
    const icons = ["🍎", "🍌", "🍓", "🍇", "🍉", "🍒"];
    const deck = [...icons, ...icons];
    return deck.sort(() => Math.random() - 0.5);
  }

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  const isGameOver = matchedCards.length === cards.length;

  return (
    <div>
      {isGameOver && <h2>¡Has ganado!</h2>}
      <div className="board">
        {cards.map((card, index) => (
          <Card
            key={index}
            index={index}
            value={card}
            isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
