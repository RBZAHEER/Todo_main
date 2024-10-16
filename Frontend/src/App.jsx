import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PageNotFound from "./components/PageNotFound";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const token = localStorage.getItem("jwt");
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={token ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}
