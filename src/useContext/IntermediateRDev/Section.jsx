import { useContext } from "react"
import { LevelContext } from "./LevelContext"

function Section({ isFancy, children }) {
  const level = useContext(LevelContext)
  return (
    <section className={isFancy ? 'fancy' : ''}>
      <LevelContext value={level + 1}>
        { children }
      </LevelContext>
    </section>
  )
}

export default Section