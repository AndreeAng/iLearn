import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from './components/Navbar.js'
import Login from './Pages/Login';
import Home from './Pages/Home';
import Classes from './Pages/Classes';
import Grades from './Pages/Grades';
import Assignments from './Pages/Assignments';

function App() {
  return (
    <Navbar/>
  );
}

export default App;
