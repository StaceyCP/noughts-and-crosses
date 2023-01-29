import { useState } from "react"

function GameGrid({ isPlayer1, setIsPlayer1, winner, setWinner, setIsGameOver }) {
    const [player1Choices, setPlayer1Choices] = useState([])
    const [player2Choices, setPlayer2Choices] = useState([])
    const [turnCount, setTurnCount] = useState(0)

    const checkWinner = () => {
        const winningCombinations = [
            ['grid-item top-left', 'grid-item top-middle', 'grid-item top-right'],
            ['grid-item middle-left', 'grid-item centre', 'grid-item middle-right'],
            ['grid-item bottom-left', 'grid-item bottom-middle', 'grid-item bottom-right'],
            ['grid-item top-left', 'grid-item middle-left', 'grid-item bottom-left'],
            ['grid-item top-middle', 'grid-item centre', 'grid-item bottom-middle'],
            ['grid-item top-right', 'grid-item middle-right', 'grid-item bottom-right'],
            ['grid-item top-left', 'grid-item centre', 'grid-item bottom-right'],
            ['grid-item top-right', 'grid-item centre', 'grid-item bottom-left']
        ]
    
        for ( const winningCombination of winningCombinations) {
            if (winningCombination.every((gridItem) => player1Choices.includes(gridItem))) {
                setIsGameOver(true)
                setWinner("Player 1 wins!")
            } else if (winningCombination.every((gridItem) => player2Choices.includes(gridItem))) {
                setIsGameOver(true)
                setWinner("Player 2 wins!")
            } else if (winner === "" && turnCount === 9) {
                setIsGameOver(true)
                setWinner("It's a draw")
            }
        }

    }
    checkWinner()
    const handleClick = (e) => {
        if (winner === "") {
            if (isPlayer1 && e.target.children[0].alt === "") {
                e.target.children[0].src = require("../imgs/circle.png")
                e.target.children[0].alt = "nought"
                setTurnCount(turnCount + 1)
                setIsPlayer1(!isPlayer1)
                setPlayer1Choices((currPlayer1Choices) => {
                    return [...currPlayer1Choices, e.target.className]
                })
            } else if (!isPlayer1 && e.target.children[0].alt === "") {
                e.target.children[0].src = require("../imgs/close.png")
                e.target.children[0].alt = "cross"
                setTurnCount(turnCount + 1)
                setIsPlayer1(!isPlayer1)
                setPlayer2Choices((currPlayer2Choices) => {
                    return [...currPlayer2Choices, e.target.className]
                })
            }        
        }
    }
    
    return (
        <div className="grid-container">
            <div className="grid-item top-left" onClick={handleClick}>
                <img src="" alt=""></img>    
            </div> 
            <div className="grid-item top-middle" onClick={handleClick}>
                <img src="" alt=""></img>    
            </div>
            <div className="grid-item top-right" onClick={handleClick}>
                <img src="" alt=""></img> 
            </div>
            <div className="grid-item middle-left" onClick={handleClick}>
            <   img src="" alt=""></img>
            </div>
            <div className="grid-item centre" onClick={handleClick}>
                <img src="" alt=""></img>  
            </div>
            <div className="grid-item middle-right" onClick={handleClick}>
                <img src="" alt=""></img>  
            </div>
            <div className="grid-item bottom-left" onClick={handleClick}>
                <img src="" alt=""></img>  
            </div>
            <div className="grid-item bottom-middle" onClick={handleClick}>
                <img src="" alt=""></img>   
            </div>
            <div className="grid-item bottom-right" onClick={handleClick}>
                <img src="" alt=""></img>     
            </div>
        </div>
    );
}

export default GameGrid;