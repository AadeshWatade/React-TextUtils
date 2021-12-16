import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  var darkMode = () =>{
    if(mode==='light'){
      setMode ('dark')
      document.body.style.backgroundColor="#15181a"
      document.body.style.color="white"
      showAlert("dark mode enabled successfully!","success")
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("light mode enabled successfully!","success")

    }
  }
  return (
    <Router>
      <Navbar mode={mode} darkMode={darkMode}/>
      <Alert alert={alert}/>
      <Switch>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>
          </Route>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
