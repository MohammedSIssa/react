import React, { useState, useCallback } from "react";

export default function UseCallbackExample1() {
  return <Parent />;
}

const Parent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  console.log("Parent rendered.");
  const handleParentCounter = () => {
    setParentCount(parentCount + 1);
  };

  const handleClick = useCallback(
    () => setChildCount(childCount + 1),
    [childCount]
  );
  return (
    <>
      <button
        className="m-5 bg-zinc-500 p-5 px-10 rounded-xl w-50"
        onClick={handleParentCounter}
      >
        {parentCount}
      </button>
      <Child onClick={handleClick}>{childCount}</Child>
    </>
  );
};

const Child = React.memo(({ onClick, children }) => {
  console.log("Child rendered");
  return (
    <button
      className="bg-zinc-900 text-zinc-50 p-5 px-10 rounded-xl m-10 w-50"
      onClick={onClick}
    >
      {children}
    </button>
  );
});
