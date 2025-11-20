import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

export default function RequireUnAuth() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.username) {
      navigate("/");
    }
  }, [user, navigate]);

  return <Outlet />;
}
