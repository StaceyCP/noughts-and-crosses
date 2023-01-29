import { useState } from "react";
import Grid from "./Grid";
import Player from "./Player";

function Game({ winner, setWinner, setIsGameOver }) {
    const [isPlayer1, setIsPlayer1] = useState(true);
    
    return (
        <div className="game-container">
            <Player player={1} isPlayer1={isPlayer1} winner={winner}/>
            <Grid isPlayer1={isPlayer1} setIsPlayer1={setIsPlayer1} winner={winner} setWinner={setWinner} setIsGameOver={setIsGameOver}/>
            <Player player={2} isPlayer1={isPlayer1} winner={winner}/>
        </div>
    );
}

export default Game;