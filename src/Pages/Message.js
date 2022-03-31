import React from "react";
import Mailer from "../components/Mailer";
import emailjs from 'emailjs-com';
import image from "../img/backgi.jpeg";

function Message(){
    return (
        <div style={styles.background}>
            <Mailer />
        </div>   
    )
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

export default Message;