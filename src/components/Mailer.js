import emailjs from 'emailjs-com';
import React, { Component } from "react";

const Mailer = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
            'service_4zxx34d', 
            'template_gn64g2e',
            e.target,
            'o63-1wDhzr9kahLNS'
            ).then(res=>{
                console.log(res);
            }).catch(err=> console.log(err));
    }
    return(
        <div
            className='background'
            style={{backgroundColor: "gray",
            height: '87vh'
        }}
         >
            <h1 className='Email'
             style = {{margin: '3% 16% 1% 45%',
             color: 'white'}}>Email </h1>

            <h1 className='Message row'
             style = {{margin: '3% 16% 1% 10%',
             color: 'white'}}> New Message </h1>
        
             <form 
                className='row' 
                style={{margin: "1% 10% 10% 10%", color: 'White'}}
                onSubmit = {sendEmail}
                >
                <label>To:</label>
                <input type='email' name= 'user_email' className='form-control'/>

                <label>Subject</label>
                <input type='text' name= 'subject' className='form-control'/>

                <label>Message</label>
                <textarea name= 'message' rows='8' className='form-control'/>

                <input type='submit' 
                value='Send' 
                className='form-control btn-primary'
                style={{marginTop: '2%'}}
                />
            </form>
        </div>
    );

    }
export default Mailer;