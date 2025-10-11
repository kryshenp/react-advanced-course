import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [
                ...prevGameBoard.map((innerArray) => [...innerArray]),
            ]; // needed for updated array immutably
            updatedBoard[rowIndex][colIndex] = "X";

            return updatedBoard;
        });
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
