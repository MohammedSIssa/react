import { useState, useRef } from 'react';

export default function ChatQ4() {
  const [text, setText] = useState('');
  const LatestText = useRef(text)

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + LatestText.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => {setText(e.target.value); LatestText.current = e.target.value}}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
