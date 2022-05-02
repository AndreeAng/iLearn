import React, { Component } from "react";
import image from "../img/backgi.jpeg";
import { Link } from "react-router-dom"; 
import img1 from "../img/teams.png";
import img2 from "../img/zoom.png";
import img3 from "../img/googlemeet.png";
import Uploader from "../components/Uploader";

class Video extends Component {
    render() { 
        return (
            <div style={styles.background}>
                 <div style={styles.section}>
                    <div>
                        <a href = "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software" target="_blank"><img src={img1} style={styles.button}/></a>
                        <a href = "https://zoom.us/join" target="_blank"><img src={img2} style={styles.button}/></a>
                        <a href = "https://meet.google.com/?pli=1" target="_blank"><img src={img3} style={styles.button}/></a>
                    </div>
                 </div>
                 <div style={styles.upload}>
                     <Uploader />
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
            marginTop: "10%",
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
    section: {
        width: "100%",
        height: "60%",
    },
    upload: {
        width: "50%",
        marginLeft: "25%",
        flex: 1,
        backgroundColor: "silver",
        paddingLeft: 150,
        paddingBottom: 100,
        borderRadius: 30,
    },
};

export default Video;