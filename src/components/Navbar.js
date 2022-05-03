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
import logo from "../img/logo.png";
import Register from "../Pages/Register";
import Reset from "../Pages/Reset";
import { Switch } from "antd";
import image from "../img/navbg.png";

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
    return   ( 
    <div className='navbar'>
    <div className='leftSide'>
    <div style={styles.background}>
    <Router>
          <nav style={styles.nav}>   
              <div className='links'>
                <Link to="/home"><img src={logo} alt="My logo" style={styles.ilearn}/></Link>
                <Link to="/archive" style={styles.logo}>Archive</Link>
                <Link to="/learning" style={styles.logo}>Learning</Link>
                <Link to="/message" style={styles.logo}>Message</Link>
                <Link to="/microsoft" style={styles.logo}>Microsoft</Link>
                <Link to="/video" style={styles.logo}>Video</Link>
                {/*<ColoredLine color= "black" /> */}
              </div>
          </nav>
          <Routes>
              <Route exact path ="/" element={<Login />}/>;
              <Route exact path="/register" element={<Register />} />;
              <Route exact path="/reset" element={<Reset />} />;
              <Route exact path ="/home" element={<Home />} />;
              <Route exact path ="/archive" element={<Archive />} />;
              <Route exact path ="/learning" element={<Learning />} />;
              <Route exact path ="/message" element={<Message/>} />;
              <Route exact path ="/microsoft" element={<Microsoft />} />;
              <Route exact path ="/video" element={<Video />} />;
          </Routes>
      </Router>
    </div>

    <div className='rightSide'>
    </div>
    </div>
  </div>
    );
}
const styles ={

logo: {
  border: 4,
  borderColor:"black",
  borderRadius: 10,
  backgroundColor: "silver",
  height: 40,
  display: "inline-block",
},
  ilearn: {
    height: 100,
    display: "inline-block",
  },
  nav: {
    height: 80,
    display: "inline-block",
  },
};
export default Navbar;