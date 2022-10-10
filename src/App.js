import React, {  } from 'react';
import {Board} from "./components";
import "./App.css"

class App extends React.Component{
  render(){
    return(
      <div className="game">
        <div className="game-board">
          <Board />
        </div> 
      </div>
    )
  }
}

export default App;
