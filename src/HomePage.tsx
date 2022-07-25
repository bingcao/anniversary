import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "./HomePage.css";

enum Section {
  HOME,
  PRODUCTS,
}

export interface HomePageProps {}

export default function HomePage(props: HomePageProps): JSX.Element {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

interface NavBarProps {}

function NavBar(props: NavBarProps): JSX.Element {
  const navigate = useNavigate();
  const [section, setSection] = useState(Section.HOME);

  return (
    <div className="nav-bar">
      <span
        className={section === Section.HOME ? "selected-section" : undefined}
        onClick={() => {
          setSection(Section.HOME);
          navigate("/home");
        }}
      >
        Home
      </span>
      <span
        className={
          section === Section.PRODUCTS ? "selected-section" : undefined
        }
        onClick={() => {
          setSection(Section.PRODUCTS);
          navigate("products");
        }}
      >
        Products
      </span>
    </div>
  );
}
