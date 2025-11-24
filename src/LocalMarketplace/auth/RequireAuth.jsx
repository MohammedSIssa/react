import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";

export default function RequireAuth({ roles }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.username) {
      navigate("/login");
    }
    if (user?.username && !roles.includes(user?.role)) {
      navigate("/unauthorized");
    }
  }, [navigate, user, roles]);

  if (!user?.username) {
    return null;
  }

  return <Outlet />;
}
