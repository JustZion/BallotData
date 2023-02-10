import React, {FC, useEffect, useState} from 'react';
import './App.css';
import Ballot from './Components/Ballot/Ballot';


const App: FC = () => {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className="App">
      <header className="app-header">
      </header>
      <Ballot />
    </div>
  );
}

export default App;
