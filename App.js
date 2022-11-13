import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage';
import Learn from "./pages/learn";
import User from "./pages/user";
import Predictor from "./pages/predictor";
import Settings from "./pages/settings";
//import LoginButto


function App() {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/mainPage' element = {<MainPage />}></Route>
        <Route path='/learn' element = {<Learn />} ></Route>
        <Route path='/predictor' element= {<Predictor/>} ></Route>
        <Route path='/user' element= {<User/>} ></Route>
        <Route path='/settings' element= {<Settings/>} ></Route>
      </Routes>
    </Router>
  );
}
  
export default App;