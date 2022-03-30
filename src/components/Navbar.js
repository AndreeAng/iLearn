import React from "react";
import '../App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from '../Pages/Home';
import Archive from '../Pages/Archive';
import Learning from '../Pages/Learning';
import Login from '../Pages/Login';
import Message from '../Pages/Message';
import Microsoft from '../Pages/Microsoft';
import Video from '../Pages/Video';
import logo from "../img/logo.png"

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
  );
function Navbar(){
    return    <div className='navbar'>
    <div className='leftSide'>
      <Router>
          <nav style={styles.nav}>   
              <div className='links'>
                <Link to="/home"><img src={logo} alt="My logo" style={styles.logo}/></Link>
                <Link to="/archive" style={styles.logo}>Archive</Link>
                <Link to="/learning" style={styles.logo}>Learning</Link>
                <Link to="/message" style={styles.logo}>Message</Link>
                <Link to="/microsoft" style={styles.logo}>Microsoft</Link>
                <Link to="/video" style={styles.logo}>Video</Link>
                {/*<ColoredLine color= "black" /> */}
              </div>
          </nav>

          <Routes>
              <Route path ="/" element={<Login />}/>;
              <Route path ="/home" element={<Home />} />;
              <Route path ="/archive" element={<Archive />} />;
              <Route path ="/learning" element={<Learning />} />;
              <Route path ="/message" element={<Message/>} />;
              <Route path ="/microsoft" element={<Microsoft />} />;
              <Route path ="/video" element={<Video />} />;
          </Routes>
      </Router>
    </div>

    <div className='rightSide'>
    </div>
    
  </div>
}
const styles ={
  logo: {
    height: 100,
    display: "inline-block",
  },
  nav: {
    height: 80,
    display: "inline-block",
  },
};
export default Navbar;