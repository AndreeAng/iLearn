import React, { Component } from "react";
import img1 from "../img/excel.png";
import img2 from "../img/word.png";
import img3 from "../img/onenote.png";
import img4 from "../img/teams.png";
import img5 from "../img/powerpoint.png";

class Microsoft extends Component {
        render() { 
            return (
                <div style={styles.container}>
                    <div>
                        <a href = "https://www.office.com/launch/word?ui=en-US&rs=US&auth=1" target="_blank"><img src={img2} style={styles.button}/></a>
                        <a href="https://www.office.com/launch/excel?ui=en-US&rs=US&auth=1" target="_blank"><img src={img1} style={styles.button}/></a>
                        <a href="https://www.office.com/launch/powerpoint?ui=en-US&rs=US&auth=1" target="_blank"><img src={img5} style={styles.button}/></a>
                    </div>
                    <div>
                        <a href="https://www.onenote.com/hrd?wdorigin=ondcauth2&wdorigin=poc" target="_blank"><img src={img3} style={styles.button}/></a>
                        <a href="https://teams.microsoft.com/_?culture=en-us&country=US&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/school//?ctx=teamsGrid" target="_blank"><img src={img4} style={styles.button}/></a>
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

