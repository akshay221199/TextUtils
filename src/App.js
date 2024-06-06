import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
// import Textform from './components/Textform';
import Textformlower from './components/Textformlower';
import About from './components/About';
import { useState } from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [btntext, setBtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const Showbtnname=(message)=>{
    setBtnText({
      msg:message
    })
  }

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
       
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setBtnText('Enable light Mode');
      document.body.style.backgroundColor = '#0d0f2f';
      showAlert("Dark mode has been enabled", "success");
     
    }

    else {
      setMode('light')
      setBtnText('Enable dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")

    }

  }
  




  return (
    <>
<Router>
      <Navbar title="Textutils" home="Home" btntext={btntext}   aboutText="About me" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      {/* <Navbar title="Textutils" /> */}
      {/* <Textform/> */}

      <About />
      
      <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
          <Textformlower showalert={showAlert} mode={mode}  />

          </Route>
        </Switch>
        </Router>
    </>
  );
}

export default App;
