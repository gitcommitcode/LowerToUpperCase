import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { Route, Routes  } from 'react-router-dom';
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode is enabled","success");
      document.title = "Home-DarkMode"
    }
    else if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode is disabled","light")
      document.title = "Home"
    }
  }
  const toggleGreenMode = ()=>{
    if(mode === 'light') {
      setMode('Green');
      document.body.style.backgroundColor = 'LightGreen'
      showAlert("Green Mode is enabled","success");
      document.title = "Home-GreenMode"
    }
    else if(mode === 'Green') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Green Mode is disabled","light")
      document.title = "Home"
    }
  }
  return (
    <>
    <Routes>
      <Route exact path="/" element={<div>
        <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
         <TextForm showAlert={showAlert} mode={mode}></TextForm>
        </div>
      </div>}/>
      <Route exact path="/about" element={<div>
        <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode}/>
        <About/>
      </div>} />
    </Routes>
    </>
    );
  }
  
  export default App;
  
//   const router;
//   router = createBrowserRouter([
//    {
//    path: '/',
//    element:<div className="container">
//    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode}/>
//    <Alert alert={alert}/>
//    <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
//    </div>,
//  }
// ])