import React, { Component } from "react";
import imgage1 from "../img/excel.jpg";
import imgage2 from "../img/word.jpg";




class Microsoft extends Component {
        render() { 
            return (
                <div style={styles.container}>
                    <div>
                        <a href = "https://www.office.com/launch/word?ui=en-US&rs=US&auth=1"><img src={imgage2} style={styles.button}/></a>
                        <a href="https://www.office.com/launch/excel?ui=en-US&rs=US&auth=1"><img src={imgage1} style={styles.button}/></a>
                        <a href="https://www.office.com/launch/powerpoint?ui=en-US&rs=US&auth=1"><img src={imgage1} style={styles.button}/></a>
                    </div>
                    <div>
                        <a href="https://onedrive.live.com/edit.aspx?resid=A0BA8893A1DC55B9!1025&cid=a0ba8893a1dc55b9"><img src={imgage1} style={styles.button}/></a>
                        <a href="https://teams.microsoft.com/_?culture=en-us&country=US&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/school//?ctx=teamsGrid"><img src={imgage1} style={styles.button}/></a>
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