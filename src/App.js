import React from 'react';
import './App.css';

import Select from './Select/Select';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Select />
        </header>
      </div>
    )
  }
}

export default App;
