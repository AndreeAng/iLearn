import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from './components/Navbar.js'
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    <Navbar />
  );
}

export default App;
