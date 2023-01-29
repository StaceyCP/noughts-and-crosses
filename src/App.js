import './App.css';
import Game from './components/Game';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [winner, setWinner] = useState("")
  const [isGameOver, setIsGameOver] = useState(false);
  const [reset, setReset] = useState(false)

  const handleReset = () => {
    setReset(!reset)
    setIsGameOver(false)
    setWinner("")
  }

  return (
    <div className="App">
      <Header winner={winner}/>
      {!reset && <Game winner={winner} setWinner={setWinner} setIsGameOver={setIsGameOver}/>}
      {reset && <Game winner={winner} setWinner={setWinner} setIsGameOver={setIsGameOver}/>}
      {isGameOver && <button type='reset' onClick={handleReset}>Reset Game</button>}
    </div>
  );
}

export default App;
