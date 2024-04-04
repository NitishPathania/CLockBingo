
import React, { useState, useEffect } from 'react';
import '../BingoFolder/Bingo.css';

const generateRandomNumbers = () => {
  const numbers = [];
  while (numbers.length < 25) {
    const randomNumber = Math.floor(Math.random() * 25) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
};

const BingoGrid = ({ randomNumbers }) => {
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
  const [playerOneTurn, setPlayerOneTurn] = useState('');
  const [randomNumbersPlayerOne, setRandomNumbersPlayerOne] = useState(generateRandomNumbers());
  const [randomNumbersPlayerTwo, setRandomNumbersPlayerTwo] = useState(generateRandomNumbers());
  const [changePlayer, setPlayerChange] = useState('First Player');
  const [lineThrougt,setLineThrougt]=useState("B I N G O")
  const [SecLineThrougt,setsecLineThrougt]=useState("B I N G O")
  const [winner, setWinner] = useState('');

  const cutNo = () => {
    const enteredNumber = Number(playerOneTurn);
    if (enteredNumber > 25) {
      alert('Fill the Number Smaller than 25');
    } else if (enteredNumber === 0) {
      alert('Zero is Not Included in Your Grid');
    } else {
      if (changePlayer === 'First Player') {
        if (randomNumbersPlayerOne.includes(enteredNumber)) {
          const updatedRandomNumbersPlayerOne = randomNumbersPlayerOne.map(num =>
            num === enteredNumber ? '❌' : num
          );
          const updatedRandomNumbersPlayerTwo = randomNumbersPlayerTwo.map(num =>
            num === enteredNumber ? '❌' : num
          );
          setRandomNumbersPlayerOne(updatedRandomNumbersPlayerOne);
          setRandomNumbersPlayerTwo(updatedRandomNumbersPlayerTwo);
          checkWinner(updatedRandomNumbersPlayerOne, 'Player 1');
        }
        setPlayerChange('Second Player');
      } else if (changePlayer === 'Second Player') {
        if (randomNumbersPlayerTwo.includes(enteredNumber)) {
          const updatedRandomNumbersPlayerOne = randomNumbersPlayerOne.map(num =>
            num === enteredNumber ? '❌' : num
          );
          const updatedRandomNumbersPlayerTwo = randomNumbersPlayerTwo.map(num =>
            num === enteredNumber ? '❌' : num
          );
          setRandomNumbersPlayerOne(updatedRandomNumbersPlayerOne);
          setRandomNumbersPlayerTwo(updatedRandomNumbersPlayerTwo);
          checkWinner(updatedRandomNumbersPlayerTwo, 'Player 2');
        }
        setPlayerChange('First Player');
      }
    }

    setPlayerOneTurn('');
  };

  const checkWinner = (randomNumbers, currentPlayer) => {
    const lines = [
      [0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24], [4, 8, 12, 16, 20]
    ];
  
    const isLineComplete = (line) => line.every(index => randomNumbers[index] === '❌');
  
    let completeLines = 0;
    for (const line of lines) {
      if (isLineComplete(line)) {
        completeLines++;
      }
      if (completeLines) {
        if(completeLines===1){
          setLineThrougt("✔️ I N G O")
          setLineThrougt("✔️ I N G O")
       
         
       
        }
        if(completeLines===2){
          setLineThrougt("✔️ ✔️ N G O")
          setsecLineThrougt("✔️ ✔️  N G O")
        }
        if(completeLines===3){
          setLineThrougt("✔️ ✔️ ✔️ G O")
          setsecLineThrougt("✔️ ✔️  ✔️ G O")
        }
        if(completeLines===4){
          setLineThrougt("✔️ ✔️ ✔️ ✔️ O")
          setsecLineThrougt("✔️ ✔️  ✔️ ✔️ O")
        }
        if(completeLines===5){
          setLineThrougt("✔️ ✔️ ✔️ ✔️ ✔️")
          setsecLineThrougt("✔️ ✔️  ✔️ ✔️ ✔️")
          setWinner(currentPlayer);
          return;
        }
     
      }
    }
  };
  useEffect(() => {
    if (winner) {
      alert(`${winner} wins!`);
    }
  }, [winner,checkWinner ]);

  return (
    <div className="bingo">
      <h1>Bingo Grid</h1>
      <div className="bingo-container">
        <div>
          <h1>Player 1</h1>
          <span>{lineThrougt}</span>
          <BingoGrid randomNumbers={randomNumbersPlayerOne} />
        </div>

        <div>
          <h1>Player 2</h1>
        <span>{SecLineThrougt}</span>  
          <BingoGrid randomNumbers={randomNumbersPlayerTwo} />
        </div>
      </div>
      <div className="turns">
        <label htmlFor="">{changePlayer}</label>
        <input
          type="number"
          className="player_input"
          value={playerOneTurn}
          onChange={(e) => setPlayerOneTurn(e.target.value)}
        />
        <button onClick={cutNo}>Cut Number</button>
      </div>
    </div>
  );
};

export default Bingo;
