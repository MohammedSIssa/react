import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Memories from "./pages/Memories";
import SecretMessage from "./pages/SecretMessage";

import styles from "./Gift.module.css";

const Gift = () => {
  return (
    <BrowserRouter basename="/Gift">
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/memories" element={<Memories />}></Route>
          <Route path="/secret-message" element={<SecretMessage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Gift;
