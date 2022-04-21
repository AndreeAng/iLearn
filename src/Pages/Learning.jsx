import React, { Component } from "react";
import image from "../img/backgi.jpeg";
import { Link } from "react-router-dom"; 
import img1 from "../img/grades.png";
import img2 from "../img/assignments.png";
import img3 from "../img/classes.png";

class Learning extends Component {
        render() { 
            return (
                <div style={styles.background}>
                    <div>
                        <img src={img1} style={styles.button}/>
                        <img src={img2} style={styles.button}/>
                        <img src={img3} style={styles.button}/>
                    </div>
                    <div>
                        <div style={styles.container}></div>
                    </div>
                </div> 
            );
        }
    };
const styles ={
        background: {
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '115vh',
        },
        container: {
            border: 20,
        borderColor:"black",
        backgroundColor: "gray",
        color: "green",
        paddingTop: "8.5%",
        paddingBottom: "0.5%",
        width: 1650,
        height: 500,
        textalign: "right", 
        textdecoration: "none",
        display: "inline-block",
        borderRadius: 20,
        marginTop: "2.5%",
        marginLeft: "4.5%"
        },
        button: {
            border: 4,
            borderColor:"black",
            backgroundColor: "silver",
            color: "black",
            width: "25%",
            textalign: "center", 
            textdecoration: "none",
            display: "inline-block",
            borderRadius: 20,
            borderColor: "black",
            marginLeft: "5%",
            marginTop: "3%",
        },
    };
    export default Learning;