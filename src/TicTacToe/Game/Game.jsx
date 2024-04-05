import React, { useState, useEffect } from 'react';
import "../Game/Game.css";
import Swal from "sweetalert2"
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [xWins, setXWins] = useState(0);
    const [oWins, setOWins] = useState(0);

    const calculateWinner = squares => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = i => {
        const squares = [...board];
        if (calculateWinner(squares) || squares[i]) return;
        squares[i] = xIsNext ? 'X' : 'O';
        setBoard(squares);
        setXIsNext(!xIsNext);
    };
    const isBoardFull = squares => {
        return squares.every(square => square !== null);
    };

    useEffect(() => {
        const winner = calculateWinner(board);
        if (winner) {
            setWinner(winner);
            if (winner === 'X') {
                setXWins(prevXWins => prevXWins + 1);
            } else if (winner === 'O') {
                setOWins(prevOWins => prevOWins + 1);
            }
            Swal.fire({
                title: `${winner} Player wins!`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
        else if (isBoardFull(board)) {
            Swal.fire({
                title: 'It\'s a draw!',
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }

    }, [board]);

    const renderSquare = i => (
        <button className="square" onClick={() => handleClick(i)}>
            {board[i]}
        </button>
    );

    const renderStatus = () => {
        if (winner) {
            return `Winner: ${winner}`;
        } else {
            return `Next player: ${xIsNext ? 'X' : 'O'}`;
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
    };

    return (
        <div className="game">
            <h1> Tic Tac Toe </h1>
            <div className="game-board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>

            </div>

            <div className="game-info">{renderStatus()}</div><br />
            <div className='winner_Show'>

                <p>X Wins: <b>{xWins}</b></p>
                <p>O Wins: <b>{oWins}</b> </p>

            </div>
            <div className="main">
                <button className="btn" onClick={resetGame}>
                    Reset Game
                </button>
            </div>
        </div>
    );
};

export default Game;
