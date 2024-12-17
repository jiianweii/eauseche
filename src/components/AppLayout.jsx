import React from "react";
import AppNav from "./AppNav";
import NavLinks from "./NavLinks";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <main>
      <AppNav />
      <NavLinks />
      <Outlet />
      <Footer />
    </main>
  );
}
