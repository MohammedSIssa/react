import { Link } from "react-router-dom"

const App2 = () => {
  return (
    <>
      <h1>Hello from main page</h1>
      <ul>
        <li><Link to="profile/popeye">Visit Popeye Profile Page</Link></li>
        <li><Link to="profile/spinach">Visit Spinach Profile Page</Link></li>
      </ul>
    </>
  )
}

export default App2