import { NavLink } from "react-router-dom"

function ErrorPage() {
  return (
    <div><h1>404 Page Does Not Exists!{' '}<NavLink to='/' style={{ color: 'violet' }}>Go Back to Main Page</NavLink></h1></div>
  )
}

export default ErrorPage