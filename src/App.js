import './App.css';
import Game from './components/Game';
import Header from './components/Header';
import { useState, useEffect } from 'react';

function App() {
  const [winner, setWinner] = useState("Play!")
  const [isGameOver, setIsGameOver] = useState(false);
  const [reset, setReset] = useState(false)
  const [p1WinCount, setP1WinCount] = useState(0)
  const [p2WinCount, setP2WinCount] = useState(0)

  useEffect(() => {
      if(winner === "Player 1 wins!") {
          setP1WinCount(prev => prev + 1)
      } else if (winner === "Player 2 wins!") {
          setP2WinCount(prev => prev + 1)
      }
  }, [winner])

  const handleReset = () => {
    setReset(!reset)
    setIsGameOver(false)
    setWinner("Play!")
    setP1WinCount(currP1WinCount => currP1WinCount)
    setP2WinCount(currP2WinCount => currP2WinCount)
  }

  return (
    <div className="App">
      <Header winner={winner}/>
      {!reset && <Game winner={winner} setWinner={setWinner} setIsGameOver={setIsGameOver} p1WinCount={p1WinCount} p2WinCount={p2WinCount}/>}
      {reset && <Game winner={winner} setWinner={setWinner} setIsGameOver={setIsGameOver} p1WinCount={p1WinCount} p2WinCount={p2WinCount}/>}
      {isGameOver && <button type='reset' onClick={handleReset}>Reset Game</button>}
    </div>
  );
}

export default App;
