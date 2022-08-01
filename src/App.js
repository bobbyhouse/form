import './App.css';
import React, { useState } from 'react';

function App() {
  const [ name, setName ] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  }

  const storeName = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <label style={{
              color: "black",
              display: "block",
            }}
          >
            Name
          </label>
          <input 
            type="text" 
            placeholder='Enter your name'
            onChange={storeName}
          />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;