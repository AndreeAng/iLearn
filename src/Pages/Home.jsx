import React, { Component } from "react";
import image from "../img/backgi.jpeg";
import img from "../img/vid.png"
import { Link } from "react-router-dom";

class Home extends Component {
    render() { 
        return (
            <div style={styles.container}>
                <div>
                    <Link to="/Video"><div style={styles.button}><div style={styles.vid}></div></div></Link>
                    <Link to="/Message"><div style={styles.button}></div></Link>
                    <Link to="/Microsoft"><div style={styles.button}></div></Link>
                </div>
                <div>
                    <Link to="/Archive"><div style={styles.button}></div></Link>
                    <Link to="/Learning"><div style={styles.button}></div></Link>
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
        backgroundColor: "silver",
        color: "black",
        paddingTop: "7%",
        paddingBottom: "7%",
        width: 300,
        textalign: "center", 
        textdecoration: "none",
        display: "inline-block",
        borderRadius: 20,
        borderColor: "black",
        marginTop: "5%",
        marginLeft: "9%"
    },
    vid: {
        backgroundImage: `url(${img})`,
    },
    
    
};
export default Home;
