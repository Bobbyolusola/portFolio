import "./LandingPages.scss";
import Header from "../header/Header";

const LandingPages = () => {
  return (
    <>
      <Header />

      <div className="landingContainer">
        <h1>UI Landing pages </h1>
        <br />
        <p>Bus Transport</p>
        <br />
        <div className="box_Img">
          <img src="assets/Page.png" alt="transport" />
        </div>
        <br />
        <br />

        <div className="box_Img">
          <p>Crypto App</p>
          <br />
          <img src="assets/kuna.png" alt="admin" />
        </div>
      </div>
    </>
  );
};

export default LandingPages;
