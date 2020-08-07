import React, { useState } from 'react';
import './App.css';

import Header from './Components/Header/Header'
import Main from './Containers/Main/Main'
import CountryDetail from './Components/CountryDetail/CountryDetail'
import { Switch, Route } from 'react-router';

function App() {

  let [darkMode, setDarkMode] = useState(true)

  function setColorMode() {
    setDarkMode(darkMode = !darkMode);
    console.log(darkMode)
  }

  document.bgColor = darkMode ? "#2b3945" : "#fafafa"


  return (
    <div className="App">
      <Header isDark={darkMode} clicked={setColorMode}></Header>
      <Switch>
         
          <Route exact path="/" render={() => (<Main isDark={darkMode} />)} />
          <Route exact path={`/country/:country`} render={(props) => <CountryDetail {...props} isDark={darkMode} />} />
          <Route render={() => <h1>Anything to show here :(</h1>} /> {/* Catching unknow routes */}
      </Switch>
    </div>
  );
}

export default App;
