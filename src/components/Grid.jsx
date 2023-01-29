function GameGrid({ isPlayer1, setIsPlayer1 }) {
    const handleClick = (e) => {
        if (isPlayer1 && e.target.children[0].alt === "") {
            e.target.children[0].src = require("../imgs/circle.png")
            e.target.children[0].alt = "nought"
            setIsPlayer1(!isPlayer1)
        } else if (!isPlayer1 && e.target.children[0].alt === "") {
            e.target.children[0].src = require("../imgs/close.png")
            e.target.children[0].alt = "cross"
            setIsPlayer1(!isPlayer1)
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