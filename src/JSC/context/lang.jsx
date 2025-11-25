import { createContext } from "react";

import { loadLanguage } from "../scripts/localStorage";

export const LanguageContext = createContext(loadLanguage());
