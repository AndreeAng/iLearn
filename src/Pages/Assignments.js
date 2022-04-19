import React, { Component } from "react";
import image from "../img/backgi.jpeg";
import { Link } from "react-router-dom"; 

class Assignments extends Component {
    render() { 
        return (
            <div style={styles.background}>
                <div> THIS IS THE ASSIGNMENTS PAGE </div>;
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
    }
};

export default Assignments;