import React, { Component } from "react";
import image from "../img/backgi.jpeg";
import { Link } from "react-router-dom";


class Microsoft extends Component {
        render() { 
            return (
                <div style={styles.container}>
                    <div>
                        <Link to=""><div style={styles.button}><div style={styles.vid}></div></div></Link>
                        <Link to=""><div style={styles.button}></div></Link>
                        <Link to=""><div style={styles.button}></div></Link>
                    </div>
                    <div>
                        <Link to=""><div style={styles.button}></div></Link>
                        <Link to=""><div style={styles.button}></div></Link>
                    </div>
                </div>
            );
        }
    };
const styles ={
        container: {
            //backgroundImage: `url(${image})`,
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
    };
    export default Microsoft;