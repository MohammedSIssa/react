import { createContext } from "react";

import { loadUser } from "../scripts/localStorage";

export const AuthContext = createContext(loadUser);
