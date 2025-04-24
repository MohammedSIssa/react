import { NavLink } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import InstallationPage from "./InstallationPage"

function Learn() {
  return (
    <div className="learn-page">
      <ul>
        <li><NavLink to='/learn/installation'>Installation</NavLink></li>
      </ul>

      <Routes>
        <Route path="/installation" element={<InstallationPage />}></Route>
      </Routes>
    </div>
  )
}

export default Learn