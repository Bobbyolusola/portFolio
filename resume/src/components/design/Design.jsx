import "./Design.scss";
import Header from "../header/Header";

const Design = () => {
  return (
    <>
      <Header />

      <div className="designContainer">
        <h1 style={{ textAlign: "center" }}>Website Html design </h1>
        <div className="box_Img">
          <a href="https://team.olusolaweb.com" target="_blank">
            <img src="assets/team.jpeg" alt="admin" />
          </a>

          <a href="https://team.olusolaweb.com" target="_blank">
            Click here to see the website
          </a>
        </div>
        <div className="info">
          <h3>About App</h3>
          <p>
            This simple website is also mobile responsive and was designed with
            Html and css code. Its shows some animation of the side bar and on
            mouse hover for the team page.
          </p>
          <br />
          <p>
            <b>Note: </b> For further required details of this App, kindly reach
            out.
          </p>
        </div>
      </div>
    </>
  );
};

export default Design;
