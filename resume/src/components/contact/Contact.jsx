import "./Contact.scss"
import {useState} from "react";

export function  Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }

    return(
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/handshake.png" alt=""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <span><b>Phone:</b> +380633169509</span>
                <span><b>Email:</b> contact@olusolaweb.com</span>
                <span><b>Linkedin:</b><a href="https://www.linkedin.com/in/olusola-gbenga-adelabu-952620210/" target="_blank"> Olusolaweb</a></span>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Message sent. I will respond ASAP.</span>}
                </form>
            </div>

        </div>
    )
}