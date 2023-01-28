import Grid from "./Grid";
import Player from "./Player";

function Game() {
    return (
        <div className="game-container">
            <Player player={1}/>
            <Grid/>
            <Player player={2}/>
        </div>
    );
}

export default Game;