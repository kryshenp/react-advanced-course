import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [
                ...prevGameBoard.map((innerArray) => [...innerArray]), // create a copy of 2D array
            ]; // needed for updating array immutably

            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

            return updatedBoard;
        });

        onSelectSquare(); // notify parent component (App) that a square was selected
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                // row
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            // cell
                            <li key={colIndex}>
                                <button
                                    onClick={() =>
                                        handleSelectSquare(rowIndex, colIndex)
                                    }
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
