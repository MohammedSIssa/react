import { useState, useEffect } from "react";

const FrontEnd = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const d = await fetch("http://localhost:3000/users");
      const djs = await d.json();

      setData(djs);
      setIsLoading(false);
      setError(null);
    };

    fetchData();
  }, []);

  if (isLoading) return <h1>Loading..</h1>;

  if (error) return <h1>Error.</h1>;

  return (
    <div>
      {data?.users.map((user, i) => (
        <h1 key={user + i}>{i + '. ' + user}</h1>
      ))}
    </div>
  );
};

export default FrontEnd;
