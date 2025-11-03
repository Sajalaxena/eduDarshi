// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminApp from "./admin/AdminApp";

// Public pages
import Home from "./components/Home";
import QuizSetup from "./pages/QuizSetup";
import QuizPage from "./pages/Quiz";

// Layout
import MainLayout from "./components/MainLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin is separate and won't include the public site sections */}
        <Route path="/admin/*" element={<AdminApp />} />

        {/* Public/marketing routes live under MainLayout */}
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<Home />} /> {/* matches "/" */}
          <Route path="home" element={<Home />} /> {/* optional */}
          <Route path="quiz-setup" element={<QuizSetup />} />
          <Route path="quiz" element={<QuizPage />} />
          {/* Add more public routes as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
