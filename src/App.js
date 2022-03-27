import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Pages/Home';
import Archive from './Pages/Archive';
import Learning from './Pages/Learning';
import Login from './Pages/Login';
import Message from './Pages/Message';
import Microsoft from './Pages/Microsoft';
import Video from './Pages/Video';

function App() {
  return (
  <Router>
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/archive"> Archive </Link>
      <Link to="/learning"> Learning </Link>
      <Link to="/login"> Login </Link>
      <Link to="/message"> Message </Link>
      <Link to="/microsoft"> Microsoft </Link>
      <Link to="/video"> Video </Link>
    </nav>
    
    <Routes>
      <Route path ="/" element={<Home />} />;
      <Route path ="/archive" element={<Archive />} />;
      <Route path ="/learning" element={<Learning />} />;
      <Route path ="/login" element={<Login />} />;
      <Route path ="/message" element={<Message/>} />;
      <Route path ="/microsoft" element={<Microsoft />} />;
      <Route path ="/video" element={<Video />} />;
    </Routes>
  </Router>
  );
}

export default App;
