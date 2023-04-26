import "./Webdev_3.scss";
import Header from "../header/Header";

const Webdev_3 = () => {
  return (
    <>
      <Header />

      <div className="container">
        <h1>GAME APP </h1>

        <div className="box_Img">
          <a href="https://www.w3schools.com" target="_blank">
            <img src="assets/game.jpeg" alt="game" />
          </a>

          <a href="https://www.w3schools.com" target="_blank">
            Click here to see the website
          </a>
        </div>
        <div className="info">
          <h3>About Intuitive Game App</h3>
          <p>
            The game is developed with Trivia API and it encourages people to
            test themselves by taking the intuitive game quiz, that tests their
            instincts and knowledge in various aspect. It also adds an element
            of fun and excitement with things like 'learning' from 'history',
            encouraging people to participate.
          </p>

          <h3>Functionalities</h3>
          <p>1. User can register, select game category and a stage</p>
          <p>
            2. Shows green button color for correct answers and red for
            incorrect answer
          </p>
          <p>3. Display scores at the right top of the quiz page</p>
          <p>
            4. User can click a button to go to the next question or to quit the
            game and back to the home page.
          </p>
          <p>
            5. Displays user's name with total scores at the end of the game
          </p>
        </div>
      </div>
    </>
  );
};

export default Webdev_3;
