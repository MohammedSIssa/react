import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import useLang from "../hooks/useLang";

export default function RequireAuth({ roles }) {
  const { user } = useAuth();
  const { lang } = useLang();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.username === undefined || !roles.includes(user?.role)) {
      navigate(`/${lang}/login`, {
        replace: true,
      });
    }
  }, [navigate, user?.username, user?.role, roles, lang]);

  if (!user?.username) {
    return null;
  }

  return <Outlet />;
}
