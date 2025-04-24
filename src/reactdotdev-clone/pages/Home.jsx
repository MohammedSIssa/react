import { NavLink } from 'react-router-dom';
import Learn from './Learn';

import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <h2>Learn React</h2>
      <button className='primary'>
        <NavLink to='/learn'>Get Started</NavLink>
      </button>
    </div>
  )
}

export default Home;
