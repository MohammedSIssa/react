export default function Story({ data, onClick }) {
  return (
    <button className="story" onClick={onClick}>
      <h1>{data.duration}</h1>
      <p>{data.summary}</p>
    </button>
  )
}