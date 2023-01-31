import { useState } from "react";
import Grid from "./Grid";
import Player from "./Player";

function Game({ winner, setWinner, setIsGameOver, p1WinCount, p2WinCount }) {
    const [isPlayer1, setIsPlayer1] = useState(true);
    
    return (
        <div className="game-container">
            <Player player={1} isPlayer1={isPlayer1} winner={winner} p1WinCount={p1WinCount} p2WinCount={p2WinCount}/>
            <Grid isPlayer1={isPlayer1} setIsPlayer1={setIsPlayer1} winner={winner} setWinner={setWinner} setIsGameOver={setIsGameOver}/>
            <Player player={2} isPlayer1={isPlayer1} winner={winner} p1WinCount={p1WinCount} p2WinCount={p2WinCount}/>
        </div>
    );
}

export default Game;