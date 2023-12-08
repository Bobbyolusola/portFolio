import "./Daily.scss";
import Header from "../header/Header";

const Daily = () => {
  return (
    <>
      <Header />

      <div className="dailyContainer">
        <h1>UX-UI Designs</h1>
        <p>Daily Mobile app</p>
        <br />
        <img className="img1" src="assets/main.jpeg" alt="main" />

        <div className="box_Img">
          <img className="img2" src="assets/hello.png" alt="daily" />
        </div>
      </div>
    </>
  );
};

export default Daily;
