import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_me712dc', 'template_4btwyvn', form.current, 'TAEasDtUzvL7JfXdg')
      e.target.reset()

    };
return (
    <>
    <div id="contact" className="container1">
        <h5>
            Get in touch
        </h5>
        <h1>
            contact
        </h1>
        <div className="contact_parent">
            <div className="msgbox">
                <div className="msg">
                <EmailIcon/>
                <h5>Email</h5>
                ts1219@gmail.com
                <a href="mailto: ts1219@gmail.com">Send a message</a>
                </div>
                <div className="msg">
                <WhatsAppIcon/>
                <h5>WhatsApp</h5>
               8601242316
                <a href="https://api.whatsapp.com/send?phone=8601242316">Send a message</a>
                </div>

            </div>
            <div className="email">
                <form ref={form} onSubmit={sendEmail}>
                    <input className="inputfeild" name="name" input-type="text" placeholder="Your full name" autoComplete="off">

                    </input>
                    <input className="inputfeild" name="mail" input-type="email" placeholder="Your email" autoComplete="off">

                    </input>
                    <textarea className="inputfeild" name="msg" rows="7" placeholder="Your message" autoComplete="off">

                    </textarea>
                    <button type="submit" className="btn btn-primary">Send message</button>
                </form>
            </div>
        </div>
        </div>
    </>
)
}
export default Contact;