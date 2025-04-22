import { useEffect, useState } from "react";

const serverUrl = 'https://localhost:8000'  

export default function ChatApp() {
  const [roomId, setRoomId] = useState('general')
  const [show, setShow] = useState(false)

  return (
    <>
      <label>
        Choose Chat Room: {' '}
        <select value={roomId} onChange={e => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>

      <button onClick={() => setShow(!show)}>
        {show ? "Close": "Open"} Chat
      </button>
      { show && <hr />}
      { show && <ChatRoom roomId={roomId} />}
    </>
  )
}

function createConnection(serverURL, roomId) {
  return {
    connect() {
      console.log('Connected to', roomId, 'Room at', serverURL, '...')
    },
    disconnect() {
      console.log('Disconnected from', roomId, 'Room at', serverURL, '...')
    }
  }
}

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => connection.disconnect()
  }, [roomId])

  return <h1>Welcome to {roomId} </h1>
}