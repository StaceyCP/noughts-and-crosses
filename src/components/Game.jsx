import { useState } from "react";
import Grid from "./Grid";
import Player from "./Player";

function Game() {
    const [isPlayer1, setIsPlayer1] = useState(true);

    return (
        <div className="game-container">
            <Player player={1} isPlayer1={isPlayer1}/>
            <Grid isPlayer1={isPlayer1} setIsPlayer1={setIsPlayer1}/>
            <Player player={2} isPlayer1={isPlayer1}/>
        </div>
    );
}

export default Game;