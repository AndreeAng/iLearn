import React, { Component } from "react";
import image from "../img/backgi.jpeg";
import { Link } from "react-router-dom"; 
import img1 from "../img/teams.png";
import img2 from "../img/zoom.png";
import img3 from "../img/googlemeet.png";

class Video extends Component {
    render() { 
        return (
            <div style={styles.background}>
                <div> Video Conferencing </div>
                 <div style={styles.section}>
                    {/* <div>
                        <div style={styles.container}></div>
                    </div> */}
                    <div>
                        <a href = "https://teams.microsoft.com/_?culture=en-us&country=US&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/school//?ctx=teamsGrid" target="_blank"><img src={img1} style={styles.button}/></a>
                    </div>
                    <div>
                        <a href = "https://zoom.us/join" target="_blank"><img src={img2} style={styles.button}/></a>
                    </div>
                    <div>
                        <a href = "https://meet.google.com/?pli=1" target="_blank"><img src={img3} style={styles.button}/></a>
                    </div>
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
        border: 20,
        borderColor:"black",
        backgroundColor: "gray",
        color: "green",
        paddingTop: "0.5%",
        paddingBottom: "0.5%",
        width: 400,
        textalign: "center", 
        textdecoration: "none",
        display: "inline-block",
        borderRadius: 20,
        marginTop: "1%",
        marginLeft: "4.5%"
    },
    container: {
        border: 20,
        borderColor:"black",
        backgroundColor: "gray",
        color: "green",
        paddingTop: "8.5%",
        paddingBottom: "0.5%",
        width: 1100,
        height: 1000,
        textalign: "right", 
        textdecoration: "none",
        display: "inline-block",
        borderRadius: 20,
        marginTop: "1%",
        marginLeft: "4.5%"
    },
    section: {
        width: "100%",
        height: "100%",
    },
};

export default Video;