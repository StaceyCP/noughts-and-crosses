
function Player({ player, isPlayer1, p1WinCount, p2WinCount }) {
    const circle = require('../imgs/circle.png')
    const cross = require('../imgs/close.png')
    if (isPlayer1 && player === 1) {
        return (
            <div className="player-container">
                <h2 className="player-heading active">Player {player}</h2>
                <h3>Wins: {p1WinCount}</h3>
                <img src={circle} alt="nought"></img>
            </div>
        );
    } else if (!isPlayer1 && player === 2) {
        return (
            <div className="player-container">
                <h2 className="player-heading active">Player {player}</h2>
                <h3>Wins: {p2WinCount}</h3>
                <img src={cross} alt="cross"></img>
            </div>
        );
    } else if (player === 1) {
        return (
            <div className="player-container">
                <h2 className="player-heading">Player {player}</h2>
                <h3>Wins: {p1WinCount}</h3>
                <img src={circle} alt="nought"></img>
            </div>
        );
    } else if (player === 2) {
        return (
            <div className="player-container">
                <h2 className="player-heading">Player {player}</h2>
                <h3>Wins: {p2WinCount}</h3>
                <img src={cross} alt="cross"></img>
            </div>
        );
    }
}

export default Player;