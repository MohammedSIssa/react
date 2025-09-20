import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const MoviesPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BACKEND_URL = "http://localhost:3000/movies";

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const res = await fetch(BACKEND_URL);
        const response = await res.json();
        setData(response);
      };

      fetchMovies();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <h1>Loading Movies...</h1>;
  }

  if (error) {
    return <h1>Error.</h1>;
  }

  if (data) {
    return (
      <div className="flex flex-col gap-2 p-10">
        {data.map((movie, idx) => (
          <NavLink key={idx} to={"/movies/" + movie.id}>
            {movie.title}
          </NavLink>
        ))}
      </div>
    );
  }
};
