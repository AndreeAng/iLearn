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
                        <Link to="/Grades"><img src={img1} style={styles.button}/></Link>
                        <Link to="" style={styles.container}></Link>
                    </div>
                    <div>
                        <Link to="/Assignments"><img src={img2} style={styles.button}/></Link>
                        <Link to="" style={styles.container}></Link>
                    </div>
                    <div>
                        <Link to="/Classes"><img src={img3} style={styles.button}/></Link>
                        <Link to="" style={styles.container}></Link>
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
            width: 1100,
            height: 20,
            textalign: "right", 
            textdecoration: "none",
            display: "inline-block",
            borderRadius: 20,
            marginTop: "1%",
            marginLeft: "4.5%"
        },
        button: {
            border: 20,
            borderColor:"black",
            backgroundColor: "gray",
            color: "green",
            paddingTop: "0.5%",
            paddingBottom: "0.5%",
            width: 500,
            textalign: "center", 
            textdecoration: "none",
            display: "inline-block",
            borderRadius: 20,
            marginTop: "1%",
            marginLeft: "4.5%"
        },
    };
    export default Learning;