function GameGrid({ isPlayer1, setIsPlayer1 }) {
    const handleClick = (e) => {
        if (isPlayer1) {
            setIsPlayer1(!isPlayer1)
        } else if (!isPlayer1) {
            setIsPlayer1(!isPlayer1)
        }
    }
    return (
        <div className="grid-container">
            <div className="grid-item top-left" onClick={handleClick}></div>
            <div className="grid-item top-middle" onClick={handleClick}></div>
            <div className="grid-item top-right" onClick={handleClick}></div>
            <div className="grid-item middle-left" onClick={handleClick}></div>
            <div className="grid-item centre" onClick={handleClick}></div>
            <div className="grid-item middle-right" onClick={handleClick}></div>
            <div className="grid-item bottom-left" onClick={handleClick}></div>
            <div className="grid-item bottom-middle" onClick={handleClick}></div>
            <div className="grid-item bottom-right" onClick={handleClick}></div>
        </div>
    );
}

export default GameGrid;