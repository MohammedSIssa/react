import Hero from "../components/Hero"
import ChooseClassPage from "./ChooseClass"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <ChooseClassPage />
    </div>
  )
}