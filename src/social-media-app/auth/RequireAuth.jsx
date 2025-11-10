import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

export default function RequireAuth() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.username) {
      navigate("/login");
    }
  }, [user, navigate]);

  // You might want to return null or a loading spinner while redirecting
  if (!user?.username) {
    return null;
  }

  return <Outlet />;
}
