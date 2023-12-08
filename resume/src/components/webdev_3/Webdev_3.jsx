import "./Webdev_3.scss";
import Header from "../header/Header";

const Webdev_3 = () => {
  return (
    <>
      <Header />

      <div className="gameContainer">
        <h1>GAME APP </h1>

        <div className="box_Img">
          <a href="https://intuitivegame.olusolaweb.com" target="_blank">
            <img src="assets/game.jpeg" alt="game" />
          </a>

          <a href="https://intuitivegame.olusolaweb.com" target="_blank">
            Click here to see the website
          </a>
        </div>
        <div className="info">
          <h3>About Intuitive Game App</h3>
          <p>
            This mobile and website responsive game is developed with Trivia API
            and it encourages people to test themselves by taking the intuitive
            game quiz, that tests their instincts and knowledge in various
            aspect. It also adds an element of fun and excitement with things
            like 'learning' from 'history', encouraging people to participate.
          </p>

          <h3>Functionalities</h3>
          <p>
            <b>1.</b> User can start a game by entering a name, select game
            category and a stage.
          </p>
          <p>
            <b>2.</b> Shows green button color for correct answers and red for
            incorrect answer.
          </p>
          <p>
            <b>3.</b> Display acquired scores at the right top of the quiz page.
          </p>
          <p>
            <b>4.</b> User can click a 'next question' button to go to the next
            question or the 'quit' button to quit the game and go back to the
            home page.
          </p>
          <p>
            <b>5.</b> Displays user's name with total scores at the end of the
            game.
          </p>
        </div>
      </div>
    </>
  );
};

export default Webdev_3;
