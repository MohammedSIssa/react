import { useEffect, useState } from "react";

const FetchGetRequest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=8"
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postData = await response.json();
        setData(postData);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="content">
        {loading && <p>Loading Posts..</p>}
        {error && <p>{error}</p>}
        <ul>
          {data && data.map(({ id, title }) => (
            <li key={id}>
              {title}
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default FetchGetRequest;
