import emailjs from 'emailjs-com';
import React, { Component, useRef, ChangeEvent,FormEvent,useState } from "react";
import Popup from"./Popup";

const Result =() =>{
    return(
        <p> Your message has been successfully sent!</p>
    )
}


const Mailer = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [result, showResult] = useState(false);
    function SendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_4zxx34d', 'template_gn64g2e',e.target,'o63-1wDhzr9kahLNS')
        .then(res=>{
                console.log(res.text);
            }).catch(err=> console.log(err.text));
            e.target.reset();
            showResult(true);
        }

 //hide result
 setTimeout(() => {
    showResult(false);
 }, 4000);
        
    return(
        <div
            className='row'
            style={{backgroundColor: "gray", 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',

        }}
         >
            <h1 className='Email'
             style = {{marginLeft: "12.5%",marginBottom: "5%",
             color: 'white'}}>Email</h1>
            
            <h1 className='Message'
             style = {{marginLeft: "12.5%",
             color: 'white'}}>
             New Message </h1>

             <form 
                className='row' 
                style={{marginLeft: "12.5%", width: "75%", color: 'White'}}
                onSubmit = {SendEmail}
                >
                <label>To:</label>
                <input type='email' name= 'user_email' className='form-control' required/>

                <label>Subject:</label>
                <input type='text' name= 'subject' className='form-control'/>

                <label>Message:</label>
                <textarea name= 'message' rows='8' className='form-control'required/>

                <button input type = 'submit' onClick ={() => setButtonPopup(true)}> Send </button>


                <div classname ="row"> {result ? <Result /> : null}</div>
              
            </form>
        </div>
    );

    }

export default Mailer;