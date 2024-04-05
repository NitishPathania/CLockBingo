
import React, { useState, useEffect } from 'react';
import '../BingoFolder/Bingo.css';
import { IoChevronBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [SecLineThrougt, setSecLineThrougt]=useState("B I N G O")
  const [winner, setWinner] = useState('');
  
  const [secPlayerName, setSecPlayerName] = useState('');
  const [promptsDisplayed, setPromptsDisplayed] = useState(false);
  const [firstPlayerName, setFirstPlayerName] = useState('');

//   const promptBox = () => {
   
 
//       const playerName1 = prompt('Enter First Player Name');
//       setFirstPlayerName(playerName1)
//       const playerName2 = prompt('Enter Second Player Name');
    
      
//   }
// useEffect(()=>{
//   promptBox();
// })
   


  

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
        if (completeLines === 1) {
          if (currentPlayer === 'Player 1') {
            setLineThrougt("✔️ I N G O");
          } else if (currentPlayer === 'Player 2') {
            setSecLineThrougt("✔️ I N G O");
          }
        }
        if (completeLines === 2) {
          if (currentPlayer === 'Player 1') {
            setLineThrougt("✔️ ✔️ N G O");
          } else if (currentPlayer === 'Player 2') {
            setSecLineThrougt("✔️ ✔️ N G O");
          }
        }
        if (completeLines === 3) {
          if (currentPlayer === 'Player 1') {
            setLineThrougt("✔️ ✔️ ✔️ G O");
          } else if (currentPlayer === 'Player 2') {
            setSecLineThrougt("✔️ ✔️ ✔️ G O");
          }
        }
        if (completeLines === 4) {
          if (currentPlayer === 'Player 1') {
            setLineThrougt("✔️ ✔️ ✔️ ✔️ O");
          } else if (currentPlayer === 'Player 2') {
            setSecLineThrougt("✔️ ✔️ ✔️ ✔️ O");
          }
        }
        if (completeLines === 5) {
          if (currentPlayer === 'Player 1') {
            setLineThrougt("✔️ ✔️ ✔️ ✔️ ✔️");
          } else if (currentPlayer === 'Player 2') {
            setSecLineThrougt("✔️ ✔️ ✔️ ✔️ ✔️");
          }
          setWinner(currentPlayer);
          return;
        }
      }
    }
  };
  useEffect(() => {
    if (changePlayer === 'First Player') {
      checkWinner(randomNumbersPlayerOne, 'Player 1');
    } else if (changePlayer === 'Second Player') {
      checkWinner(randomNumbersPlayerTwo, 'Player 2');
    }
  }, [randomNumbersPlayerOne, randomNumbersPlayerTwo, changePlayer]);

  useEffect(() => {
    if (winner) {
     
      toast(`${winner} wins!`)
    }
  }, [winner ]);

  return (
    <div className="bingo">
         <div className='iconDiv' >
        <h6><Link to="/">< IoArrowBackCircleSharp className='homeIcon' /></Link></h6>
        
     
    </div>
      <h1 className='bingo_heading'>Bingo Game</h1>
      <div className="bingo-container">
        <div className='inner_bingo_div'>
          <h1 className='player_heading'>Player 1</h1><br />
          <h5 className='player_heading_bingo'>{lineThrougt}</h5>
          <BingoGrid randomNumbers={randomNumbersPlayerOne} />
        </div>

        <div>
          <h1 className='player_heading'> Player 2</h1><br />
        <h5 className='player_heading_bingo'>{SecLineThrougt}</h5>  
          <BingoGrid randomNumbers={randomNumbersPlayerTwo} />
        </div>
      </div>
      <div className="turns">
        <label  className='player_heading'  htmlFor="">{changePlayer}</label>
        <input
          type="text"
          className="player_input"
          value={playerOneTurn}
          onChange={(e) => setPlayerOneTurn(e.target.value)}
        />
        <button onClick={cutNo}>Cut Number</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Bingo;
