import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Content = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BACKEND_URL = "http://localhost:3000";
  const location = useLocation();
  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await fetch(BACKEND_URL + location.pathname);
        const response = await res.json();
        setData(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetching();
  }, [location.pathname]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>Error.</h1>;
  }
  if (data !== null)
    return (
      <div className="flex flex-col gap-5 p-10">
        {data.map((item, idx) => (
          <h1 key={idx}>{item.title}</h1>
        ))}
      </div>
    );
};
