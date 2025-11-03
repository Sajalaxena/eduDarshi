// src/components/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Page content will be rendered here by nested routes (Outlet) */}
      <main className="flex-1 container mx-auto px-6 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
