import React from 'react';
import logo from 'assets/images/logo.svg';
import 'assets/styles/pages/App.css';
import DWQuintileDisplay from 'DelegatedWrappers/DWQuintileDisplay';
import { DQuintilePercentile } from 'Delegates/Quintile/DQuintilePercentile';

function App() {
  const percentile = 50;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DWQuintileDisplay
          delegate={new DQuintilePercentile(percentile)}
        />
      </header>
    </div>
  );
}

export default App;
