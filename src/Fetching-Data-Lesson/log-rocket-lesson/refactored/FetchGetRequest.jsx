import { useEffect, useState } from "react";
import getRequestFetchNative from "./nativeFetch";

const FetchGetRequest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getRequestFetchNative(
          "https://jsonplaceholder.typicode.com/posts?_limit=8"
        );

        setData(postData);
        setError(null);

      } catch (error) {
        setError(error.message);
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
        {loading && <h1>Loading Posts..</h1>}
        {error && <p>{error}</p>}
        <ul>
          {data && data.map(({ id, title }) => <li key={id}>{title}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default FetchGetRequest;