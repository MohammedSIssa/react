import { useState, useEffect } from "react";

const useImageURL = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error.");
        }
        return response.json();
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading}
};

const Image = () => {
  const { imageURL, error, loading} = useImageURL()

  if(loading) return <p>Loading..</p>
  if(error) return <p>an error was encoutered</p>

  return (
    <>
      <h1>An Image</h1>
      <img src={imageURL} alt="Placeholder text" />
    </>
  )
}

export default Image