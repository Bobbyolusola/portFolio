import "./Webdev_1.scss";
import Header from "../header/Header";

const Webdev_2 = () => {
  return (
    <>
      <Header />

      <div className="adminContainer">
        <h1>Admin App </h1>
        <p>
          <b>NOTE : </b> Kindly find the login access to this admin App in the
          last paragraph below. Also, for further explanation, kindly reach out
          via the contact form.
        </p>
        <div className="box_Img">
          <a href="https://adminpage.olusolaweb.com" target="_blank">
            <img src="assets/admin.jpeg" alt="admin" />
          </a>

          <a href="https://adminpage.olusolaweb.com" target="_blank">
            <p>Click here to see the website</p>
          </a>
        </div>
        <div className="info">
          <h3>About this website </h3>
          <p>
            This is a non-responsive admin website application that keeps track,
            manage data's in connection with the database, and simplifies the
            handling and storage of data for the application.
          </p>

          <h3>Functionalities</h3>
          <p>
            <b>1.</b> Viewing and editing a user profile
          </p>
          <p>
            <b>2.</b> Adding and deleting a user profile
          </p>
          <p>
            <b>3.</b> Viewing and editing the Admin profile
          </p>
          <p>
            <b>4.</b> Searching for users and products
          </p>
          <p>
            <b>5.</b> Adding and Viewing of products
          </p>
          <p>
            <b>6.</b> Deleting of products and Deliveries
          </p>
          <p>
            <b>7.</b> Changing of App theme from light to dark color
          </p>

          <h3>Login Access</h3>
          <p>Email: admin@rollytex.com</p>
          <p>Password: 123456</p>
        </div>
      </div>
    </>
  );
};

export default Webdev_2;
