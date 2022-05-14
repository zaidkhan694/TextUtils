import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import React , {useState} from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert =(message , type) => 
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const[mode,setMode] = useState('light');
  const toggleMode =()=> 
  {
  if(mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor='black';
    showAlert("Dark mode has been enabled","success");
  }
  else
  {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Dark mode has been enabled","success");
  }
  }
  return (
    <>
   {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        
      {/* <Switch>
          <Route exact path="/about"> */}
          {/* <About mode={mode}/> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading={"Enter your text to analyse below"} mode={mode}/>
          {/* </Route>
        </Switch>    */}
      </div> 
      {/* </Router> */}
    </>
  );
}
export default App;
