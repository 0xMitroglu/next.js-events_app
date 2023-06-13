import React from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

const MainLayout = ({ children }) => {
  return (
    <div className="app">
      <div className="app-no-footer">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
