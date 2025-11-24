import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";

export default function RequireUnAuth() {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.username) {
      navigate("/");
    }
  }, [navigate, user]);

  return <Outlet />;
}
