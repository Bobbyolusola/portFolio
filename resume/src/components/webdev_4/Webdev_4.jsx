import "./Webdev_4.scss";
import Header from "../header/Header";

const Webdev_4 = () => {
  return (
    <>
      <Header />

      <div className="chatContainer">
        <h1>CHAT APP </h1>
        <p>
          <b>NOTE : </b> Kindly signup and login to access this chat Application
          on different browsers, therefore, it will be a chat between two
          created users to see how the app functions. Also, for further
          explanation on the function of this chat app, kindly reach out either
          via Phone, email, linkedin or the contact form.
        </p>
        <div className="box_Img">
          <a href="https://imessage.olusolaweb.com" target="_blank">
            <img src="assets/chat.jpeg" alt="admin" />
          </a>
          <br />
          <br />

          <a href="https://imessage.olusolaweb.com" target="_blank">
            Click here to see the website
          </a>
        </div>
        <div className="info">
          <h3>About App</h3>
          <p>
            This website and mobile responsive Chat App is developed and
            connected to Firebase Database. This Firebase Database is where
            chats and user informations are stored. It demonstrates how two
            people can communicate with messages between themselves from one
            ends to another. Also, message history and user details are stored
            in the database.
          </p>
          <h3>Functionalities</h3>
          <p>
            <b>1.</b> Different users can Signup on different browsers and
            login.
          </p>
          <p>
            <b>2.</b> User can search one another with the 'display name'.
          </p>
          <p>
            <b>3.</b> User can send a message to each other and it will be
            delivered and received instantly.
          </p>
          <p>
            <b>4.</b> User can attach an image to send to one another.
          </p>

          <br />
        </div>
      </div>
    </>
  );
};

export default Webdev_4;
