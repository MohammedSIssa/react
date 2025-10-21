import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MovieTrailer } from "./MovieTrailer";
import { MoviePoster } from "./MoviePoster";
import { MovieMovie } from "./MovieMovie";

export const MoviePlayer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const BACKEND_URL = "http://localhost:3000/movies";

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(`${BACKEND_URL}/${id}`);
        const response = await res.json();
        console.log("Getting Movie With ID:", id);
        setData(response);
      };

      fetchData();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <h1>Loading Movie Data..</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (data !== null) {
    return (
      <>
        <h1>{data.title}</h1>
        <MoviePoster poster={data.source} ext={data.poster} />
        <p>{data.story}</p>
        <MovieTrailer video={data.source} />
        <MovieMovie movie={data.source} />
      </>
    );
  }
};
