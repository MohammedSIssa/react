import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { API } from "../scripts/globals";

const FollowersPage = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(API + "/users/" + id + "/followers");
        const raw = await res.json();

        setData(raw);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [id]);

  if (loading) return <h1>Loading followers</h1>;
  if (error) return <h1>Error occurred</h1>;
  if (data)
    return (
      <div>
        <pre>{JSON.stringify(data.followers, null, 2)}</pre>
      </div>
    );
};

export default FollowersPage;
