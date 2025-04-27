import homeStyles from './Home.module.css'
import FirstMeeting from '../components/FirstMeeting'

const Home = () => {
  return (
    <div className={homeStyles.home}>
      <div className={homeStyles.background}></div>
      <div className={homeStyles.content}>
        <h1>Happy 9-Months Together! 🎉</h1>
        {/* <FirstMeeting homeStyles={homeStyles} /> */}
      </div>
    </div>
  )
}

export default Home