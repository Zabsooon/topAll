import { useState, useEffect } from 'react';

import './App.css'
import CardContainer from './CardContainer'
import ScoreBoard from './ScoreBoard' 

function App() {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let allCards = [];
    async function fetchCard(cardId) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${cardId}/`);
      const data = await response.json();
      return data;
    }
    async function fetchAllCards() {
      for (let i = 1; i <= 12; i++) {
        const card = await fetchCard(i);
        allCards.push(card);
      }
      setCards(allCards);
    }
    fetchAllCards();
  }, []);

  return (
    <>
      <h1>Memory Card Game</h1>
      <ScoreBoard score={score} />
      <CardContainer cards={cards} />
    </>
  )
}

export default App
