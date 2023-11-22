//App.js
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import HomePage from './components/HomePage';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Router from './router/Router';

function App() {
  return (
    // <div className="App">
    //  <ToDoList/>
    //  {/* <HomePage/> */}
    // </div>
    <Router/>
      
    
  );
}

export default App;
