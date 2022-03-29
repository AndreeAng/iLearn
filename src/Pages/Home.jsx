import React, { Component } from "react";
import image from "../img/backgi.jpeg";
import img from "../img/video.png";
import img1 from "../img/mail.png";
import img2 from "../img/microsoft.png";
import img3 from "../img/archive.png";
import img4 from "../img/online.png";
import { Link } from "react-router-dom";

class Home extends Component {
    render() { 
        return (
            <div style={styles.container}>
                <div>
                    <Link to="/Video"><img src={img} style={styles.button}/></Link>
                    <Link to="/Message"><img src={img1} style={styles.button}/></Link>
                    <Link to="/Microsoft"><img src={img2} style={styles.button}/></Link>
                </div>
                <div>
                    <Link to="/Archive"><img src={img3} style={styles.button}/></Link>
                    <Link to="/Learning"><img src={img4} style={styles.button}/></Link>
                </div>
            </div>
        );
    }
};
 
const styles ={
    container: {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '87vh',
    },
    button: {
        border: 4,
        borderColor:"black",
        backgroundColor: "white",
        color: "black",
        width: 300,
        textalign: "center", 
        textdecoration: "none",
        display: "inline-block",
        borderRadius: 20,
        borderColor: "black",
        marginTop: "5%",
        marginLeft: "9%"
    },
    
    
};
export default Home;
