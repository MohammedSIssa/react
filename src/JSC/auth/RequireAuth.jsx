import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function RequireAuth({ roles }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user?.username === undefined);
    console.log(!roles.includes(user?.role));
    if (user?.username === undefined || !roles.includes(user?.role)) {
      navigate("/login", { replace: true });
    }
  }, [navigate, user?.username, user?.role, roles]);

  if (!user?.username) {
    return null;
  }

  return <Outlet />;
}
