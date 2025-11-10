import { useState, useEffect } from "react";
import { API } from "../scripts/globals";

const Users = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("getting users..");
    async function getUsers() {
      try {
        const res = await fetch(API + "/users");
        const raw = await res.json();

        setData(raw);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  if (loading) return <h1>Loading users..</h1>;
  if (error) return <h1>Error loading users</h1>;

  if (data) {
    return (
      <h1>All Users {data.length}</h1>
    );
  }
};

export default Users;
