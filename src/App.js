import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
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
    }
    else if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode is disabled","light")
    }
  }
  const toggleGreenMode = ()=>{
    if(mode === 'light') {
      setMode('Green');
      document.body.style.backgroundColor = 'LightGreen'
      showAlert("Green Mode is enabled","success");
    }
    else if(mode === 'Green') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Green Mode is disabled","light")
    }
  }
  return (
   <>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <TextForm showAlert={showAlert} mode={mode}></TextForm>
    </div>
   </>
  );
}

export default App;
