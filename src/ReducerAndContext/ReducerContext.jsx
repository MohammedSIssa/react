import { useContext, createContext, useReducer } from "react";

import "./style.css";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "BIG_INCREMENT":
      return { count: state.count + 10 };
    case "BIG_DECREMENT":
      return { count: state.count - 10 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

const CountContext = createContext(0);

export default function ReducerContext() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <CountContext value={{ state, dispatch }}>
      <Page />
    </CountContext>
  );
}

function CounterDisplay() {
  const { state } = useContext(CountContext);
  return (
    <div className="count">
      <p>{state.count}</p>
    </div>
  );
}

function ControlButtons() {
  const { dispatch } = useContext(CountContext);
  return (
    <div className="control-buttons">
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}> +1 </button>
      <button
        onClick={() => {
          dispatch({ type: "BIG_INCREMENT" });
        }}> +10 </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}> -1 </button>
      <button
        onClick={() => {
          dispatch({ type: "BIG_DECREMENT" });
        }}>-10 </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}> 0 </button>
    </div>
  );
}

function Page() {
  return (
    <div className="container">
      <div className="application">
        <CounterDisplay />
        <ControlButtons />
      </div>
    </div>
  );
}
