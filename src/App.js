import React, { useState } from 'react';
import './App.css';

import Header from './Components/Header/Header'
import Main from './Containers/Main/Main'

function App() {

  let [darkMode, setDarkMode] = useState(true)

  function setColorMode() {
    setDarkMode(darkMode = !darkMode);
    console.log(darkMode)
  }


  return (
    <div className="App">
      <Header isDark={darkMode} clicked={setColorMode}></Header>
      <Main isDark={darkMode}/>
    </div>
  );
}

export default App;
