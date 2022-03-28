import emailjs from 'emailjs-com';

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
        <div className="container border"
            style ={{marginTop: '10%',
            width: '30%',
            backgroundImage: `url('https://heroic.com/wp-content/uploads/HEROIC-Email-Security-Background.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <h1 style={{marginTop: '20%'}}>Email Sender</h1>
            <form 
                className='row' 
                style={{margin: "10% 20% 15% 25%"}}
                onSubmit = {sendEmail}
                >

                <label>Name</label>
                <input type='text' name= 'name' className='form-control'/>

                <label>Email</label>
                <input type='email' name= 'user_email' className='form-control'/>

                <label>Message</label>
                <textarea name= 'message' rows='4' className='form-control'/>
                <input type='submit' 
                value='Send' 
                className='form-control btn-primary'
                style={{marginTop: '20%'}}
                />
            </form>
        </div>



    );
};

export default Mailer;