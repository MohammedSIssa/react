import { NavLink } from "react-router-dom";
import { Atom } from "lucide-react";

import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Atom size={120} />
      <h2 className="title">React</h2>
      <h2>The library for web and native user interfaces</h2>
      <div className="buttons">
        <button className="primary">
          <NavLink to="/learn" style={{ fontFamily: 'TuffyBold' }}>Learn React</NavLink>
        </button>
        <button className="secondary">
          <NavLink to="/community">Community</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Home;
