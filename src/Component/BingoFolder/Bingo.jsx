

import React, { useState } from 'react';
import "../BingoFolder/Bingo.css"

const BingoGrid = () => {
  const [randomNumbers] = useState(generateRandomNumbers());

  function generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 25) {
      const randomNumber = Math.floor(Math.random() * 25) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  }

  return (
    <div className="bingo-grid">
      {randomNumbers.map((number, index) => (
        <div key={index} className="bingo-cell">
          {number}
        </div>
      ))}
    </div>
  );
};

const Bingo = () => {
  const [input, setInput] = useState({ player: "" });
  const [playerName, setPlayerName] = useState("PlayerOne turn");
  const [player1Numbers, setPlayer1Numbers] = useState([]);
  const [player2Numbers, setPlayer2Numbers] = useState([]);
  console.log(player1Numbers)
  console.log(player2Numbers)
  const handleChangeName = () => {
    setPlayerName("PlayerTwo turn");
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
 // Callback function to handle generated numbers for player 1
 const handlePlayer1Numbers = (numbers) => {
  setPlayer1Numbers(numbers);
};

// Callback function to handle generated numbers for player 2
const handlePlayer2Numbers = (numbers) => {
  setPlayer2Numbers(numbers);
};
console.log(input)
  return (
    <div className="bingo">
      <h1>Bingo Grid</h1>
      <div className="bingo-container">
        <div>
          <h1>Player 1</h1>
          <BingoGrid  onGenerateNumbers={handlePlayer1Numbers} /><br />
        </div>
        <div>
          <h1>Player 2</h1>
          <BingoGrid onGenerateNumbers={handlePlayer2Numbers}  /><br />
        </div>
      </div>
      <div>
        <span>{playerName}</span> 
        <input
          className='player_input'
          type="text"
          onChange={handleChange}
          value={input.player}
          name='player'
        />
        <button onClick={handleChangeName}>Done</button>
      </div>
    </div>
  );
};

export default Bingo;
