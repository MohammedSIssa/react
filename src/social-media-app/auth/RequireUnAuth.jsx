import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

export default function RequireUnAuth() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.username) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [user, navigate]);

  return <Outlet />;
}
