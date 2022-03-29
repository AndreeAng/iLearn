import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Pages/Home';
import Archive from './Pages/Archive';
import Learning from './Pages/Learning';
import Login from './Pages/Login';
import Message from './Pages/Message';
import Microsoft from './Pages/Microsoft';
import Video from './Pages/Video';
import logo from "./img/logo.png"

function App() {
  return (
  <Router>
    <nav style={styles.navbar}>
    <img src={logo} alt="My logo" style={styles.logo}/>
      <Link to="/"><div style={styles.box}>Home</div></Link>
      <Link to="/archive"><div style={styles.box}>Archive </div></Link>
      <Link to="/learning"><div style={styles.box}>Learning</div></Link>
      <Link to="/login"><div style={styles.box}>Login</div></Link>
      <Link to="/message"><div style={styles.box}>Message</div> </Link>
      <Link to="/microsoft"><div style={styles.box}>Microsoft</div></Link>
      <Link to="/video"><div style={styles.box}>Video</div></Link>
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
const styles ={
  navbar: {
    backgroundColor: "white",
    BorderBottom: 3,
    height: 100,
  },
  logo: {
    width: 200,
    height: 100,
    marginLeft: 20,
    
  },
  box: {
    display: "inline-block",
    paddingTop: 80,
    textdecoration: "none",
    fontSize: 20,
    width: 100,
    marginLeft: 20,
    textAlign: "center",
    justifyContent: 'center',
  }
};
export default App;
