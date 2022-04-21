import React, { Component } from "react";
import image from "../img/backgi.jpeg";
import { Link } from "react-router-dom"; 

import img1 from "../img/newspaperArchive.png";
import img2 from "../img/historyArchive.png";

class Archive extends Component {
    render() { 
        return (
            <div style={styles.background}>
                <div>
                    <img src={img1} style={styles.heading}/>
                    <img src={img2} style={styles.heading}/>
                </div>
                <div>
                    <div style={styles.container}></div>
                    <div style={styles.container}></div>
                </div>
            </div> 
        );
    }
};

const styles ={
    container: {
        border: 20,
        borderColor:"black",
        backgroundColor: "gray",
        color: "green",
        paddingTop: "8.5%",
        paddingBottom: "0.5%",
        width: 700,
        height: 750,
        textalign: "right", 
        textdecoration: "none",
        display: "inline-block",
        borderRadius: 20,
        marginTop: "0%",
        marginLeft: "7.5%"
    },
    heading: {
        border: 4,
        borderColor:"black",
        backgroundColor: "clear",
        color: "green",
        paddingTop: "0%",
        paddingBottom: "0%",
        width: 700,
        height: 300,
        textalign: "right", 
        textdecoration: "none",
        display: "inline-block",
        borderRadius: 20,
        marginTop: "1%",
        marginLeft: "7.5%"
    },
    background: {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '115vh',
    }
};

export default Archive;