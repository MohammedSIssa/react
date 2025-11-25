import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import useLang from "../hooks/useLang";

export default function RequireUnAuth() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { lang } = useLang();

  useEffect(() => {
    if (user?.username) {
      navigate(`/${lang}`);
    }
  }, [user, navigate, lang]);

  return <Outlet />;
}
