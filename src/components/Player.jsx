function Player({ player, isPlayer1, winner }) {
    if (isPlayer1 && player === 1) {
        return (
            <div className="player-container">
                <h2 className="player-heading active">Player {player}</h2>
            </div>
        );
    } else if (!isPlayer1 && player === 2) {
        return (
            <div className="player-container">
                <h2 className="player-heading active">Player {player}</h2>
            </div>
        );
    } else {
        return (
            <div className="player-container">
                <h2 className="player-heading">Player {player}</h2>
            </div>
        );
    }
}

export default Player;