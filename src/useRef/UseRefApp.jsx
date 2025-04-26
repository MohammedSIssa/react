import { useRef } from 'react'

export default function UseRefApp() {
  const ref = useRef(0);
  // { current: 0 }

  function handleClick() {
    ref.current = ref.current + 1
    alert(ref.current)
  }

  return (
    <>
      <button onClick={handleClick}>
        Click Me
      </button>
    </>
  )
}