import "./Contact.scss";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  // const handleSubmit = (e)=> {
  //     e.preventDefault();
  //     // emailjs.init('aBjfc5O5oyXi2kAC4');
  //     // emailjs.sendForm('service_lgxilrm','template_cid8lop',e.target)
  //     setMessage(true);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lgxilrm",
        "template_cid8lop",
        form.current,
        "aBjfc5O5oyXi2kAC4"
      )
      .then(
        (message) => {
          // console.log(message);
          message?.status === 200 && showSuccess();
        },
        (error) => {
          // console.log(error);
          setError(true);
        }
      );
    e.target.reset();
  };

  const showSuccess = () => {
    setMessage(true);
    setTimeout(() => setMessage(false), 3000);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/handshake.png" alt="" />
      </div>
      <div className="right">
        <div className="spanDiv">
          <h2>Contact</h2>
          <span>
            <b>Phone: </b> +1 604 753 7715
          </span>
          <span>
            <b>Email: </b> contact@olusolaweb.com
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/olusola-gbenga-adelabu-952620210/"
              target="_blank"
            >
              <b>Linkedin: </b> Olusolaweb@Linkedin.com
            </a>
          </span>

          <form action="" ref={form} onSubmit={handleSubmit}>
            <input required type="text" name="name" placeholder="Name" />

            <input
              required
              type="email"
              name="user_email"
              placeholder="Email"
            />

            <textarea required name="message" placeholder="Message"></textarea>

            <button type="submit">Send</button>
            {message && <p>Message sent. I will respond ASAP.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
