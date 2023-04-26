import "./Webdev_4.scss";
import Header from "../header/Header";

const Webdev_4 = () => {
  return (
    <>
      <Header />

      <div className="container">
        <h1>CHAT APP </h1>
        <p>
          <b>NOTE : </b> Kindly find the login details to access the admin App
          is the last paragraph of this page.
        </p>
        <div className="box_Img">
          <a href="https://www.w3schools.com" target="_blank">
            <img src="assets/admin.jpeg" alt="admin" />
          </a>

          <a href="https://www.w3schools.com" target="_blank">
            Click here to see the website
          </a>
        </div>
        <div className="info">
          <h3>About App</h3>
          <p>
            This admin App keeps track, manage data's in connection with the
            database, and simplifies the handling and storage of data for the
            application.
          </p>

          <h3>Functionalities</h3>
          <p>1. Adding, viewing, deleting and editing a user profile</p>
          <p>2. Viewing and editing the Admin profile</p>
          <p>3. Searching for users</p>
          <p>4. Deleting of products and Deliveries</p>
          <p>5. Changing of App theme from light to dark color</p>

          <h3>Access Codes</h3>
          <p>Login Username: admin@rollytex.com</p>
          <p>Login Password: 123456</p>
        </div>
      </div>
    </>
  );
};

export default Webdev_4;
