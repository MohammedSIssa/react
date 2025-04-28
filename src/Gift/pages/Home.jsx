import homeStyles from "./Home.module.css";
import NavButtons from "../components/LinkButtons";

const Home = () => {
  return (
    <div className={homeStyles.home}>
      <div className={homeStyles.background}></div>
      <div className={homeStyles.content}>
        <h1>Happy 9-Months Together! 🎉</h1>
        <p>My world is better with you ❤️</p>
        <div className={homeStyles.buttons}>
          <NavButtons />
        </div>
        <p>You + Me = Forever (inshallah) 🌸</p>
      </div>
    </div>
  );
};

export default Home;
