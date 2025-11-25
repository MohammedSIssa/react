import { useContext } from "react";
import { LanguageContext } from "../context/lang";

export default function useLang() {
  return useContext(LanguageContext);
}
