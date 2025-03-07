import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const scrollToSearch = () => {
  const searchSection = document.querySelector(".search");
  if (searchSection) {
    searchSection.scrollIntoView({ behavior: "smooth" });
  }
};

function RootLayout() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-nav">
          <img src="../src/assets/dumb/Logo.png" alt="" />
          <div className="navbar-menu">
            <NavLink
              style={{
                marginRight: "20px",
              }}
              to="/"
            >
              Beranda
            </NavLink>
            |
            <NavLink
              to="/about"
              style={{
                marginLeft: "20px",
              }}
            >
              Tentang Kami
            </NavLink>
            <NavLink
              style={{
                marginLeft: "20px",
              }}
              to="/login"
            >
              <button className="search-button">
                Masuk
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default RootLayout;
