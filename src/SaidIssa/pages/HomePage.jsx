import { NavLink } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-5">
        الموقع الرسمي - أ.سعيد عيسى
      </h1>
      <NavLink to='/lesson/0/0' className="bg-zinc-900 text-zinc-50 p-5 px-10 rounded-3xl">Get Started</NavLink>
    </div>
  )
}