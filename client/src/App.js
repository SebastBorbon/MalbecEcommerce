import LogIn from "./components/LogIn/LogIn";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
