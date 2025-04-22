import { useReducer } from "react"

function reducer(state, action) {
  switch(action.type) {
    case "incremented_count": {
      return { count: state.count + 1}
    }
    case "decremented_count": {
      return { count: state.count - 1}
    }
  }
}

export default function ReducingState() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function handleUpClick() {
    dispatch({ type: "incremented_count"});
  }

  function handleDownClick() {
    dispatch({ type: "decremented_count" })
  }

  return (
    <div className="control-buttons">
    {state.count}
    <button onClick={handleUpClick}>up one</button>
    <button onClick={handleDownClick}>down one</button>
    </div>
  )
}