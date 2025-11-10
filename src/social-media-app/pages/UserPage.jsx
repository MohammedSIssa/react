import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import { useState, useEffect } from "react";

import EditProfileButton from "../components/EditProfileButton";

import { API } from "../scripts/globals";

import FollowButton from "../components/FollowButton";
import UnfollowButton from "../components/UnfollowButton";

import { NavLink } from "react-router-dom";

const UserPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [canFollowUser, setCanFollowUser] = useState(false);

  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(API + "/users/" + id);
        const raw = await res.json();

        setData(raw);
        const isAlreadyFollowing = raw.followers.find((u) => u.id == user.id);
        setCanFollowUser(isAlreadyFollowing ? false : true);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [id, user.id]);

  if (loading) return <h1>Loading user data</h1>;
  if (error) return <h1>Error occurred</h1>;
  if (data) {
    return (
      <div className="flex flex-col gap-5 p-5 items-center">
        <p className="font-bold text-xl">{data.user.username}</p>
        {/* <pre className="p-5">{JSON.stringify(data, null, 2)}</pre> */}
        <div className="flex gap-8 items-center justify-center">
          <NavLink
            to={`/users/${id}/followers`}
            className="flex flex-col gap-2 items-center justify-center bg-neutral-800 p-2 rounded-xl"
          >
            <span>Followers</span>
            <span>{data.followers_count}</span>
          </NavLink>
          <NavLink
            to={`/users/${id}/following`}
            className="flex flex-col gap-2 items-center justify-center bg-neutral-800 p-2 rounded-xl"
          >
            <span>Following</span>
            <span>{data.following_count}</span>
          </NavLink>
        </div>
        {canFollowUser && user.id != id && (
          <FollowButton id={user.id} target={id} />
        )}
        {user.id == id && <EditProfileButton id={id} />}
        {!canFollowUser && <UnfollowButton id={user.id} target={id} />}
      </div>
    );
  }
};

export default UserPage;
