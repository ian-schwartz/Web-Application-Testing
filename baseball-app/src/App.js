import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';


function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  // const [balls, setBalls] = useState(0);
  // const [strikes, setStrikes] = useState(0);
  
  // return (
  //   <div className="App">
  //     <h1>Baseball At-Bat</h1>
  //     <div className="display">
  //       <div className="balls">Balls: {balls}</div>
  //       <div className="strikes">Strikes: {strikes}</div>
  //     </div>
  //     <div className="buttons">
  //       <button onClick={ () => setStrikes(addStrike(strikes)) }>Strike</button>
  //       <button onClick={ () => setBalls(addBall(balls)) }>Ball</button>
  //       <button onClick={ () => setStrikes(foulBall(strikes)) }>Foul</button>
  //       <button onClick={ () => setStrikes(hit(strikes), setBalls(hit(balls))) }>Hit</button>
  //   </div>
  //   </div>
  const addStrike = currentStrikes => {
    if(currentStrikes >= 2) {
      return 0;
    } else {
      return currentStrikes + 1;
    };
  }
  
  const addBall = currentBalls => {
    if (currentBalls >= 3) {
      return 0;
    } else {
      return currentBalls + 1;
    };
  }
  
  const foulBall = currentStrikes => {
    if (currentStrikes >= 2) {
        return currentStrikes;
    } else {
        return currentStrikes + 1;
    }
  };
  
  const hit = () => {
    setStrikes(0);
    setBalls(0);
  };
  
  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard addStrike={ () => setStrikes(addStrike(strikes)) } addBall={ () => setBalls(addBall(balls)) } foulBall={ () => setStrikes(foulBall(strikes)) } hit={hit} />
    </div>  
  );
}

export default App;
