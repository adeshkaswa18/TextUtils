import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform'
import Alert from './Components/Alert'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setInterval(() => {
      setAlert(null)
    }, 4000);

  }

  function toggleMode() {

    if( mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode enabled successfully', 'success');
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark Mode enabled successfully', 'success');
    }
  }
  return (
    <>
  <Router>
    <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container'>
      <Routes>
          
          <Route exact path="/" element={<Textform heading="Enter Your Text To Be Analyzed Below" mode={mode} showAlert={showAlert}/> } />
      </Routes>
    </div>
  </Router>
    
    
    </>
    
  );
}

export default App;
