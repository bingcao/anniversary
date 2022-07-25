import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";
import { app } from "./firebase";
import ProductList from "./ProductList";
import SignIn from "./auth/SignIn";
import Image from "./images/friends.jpg";

function App() {
  const [user, loading, error] = useAuthState(getAuth(app));
  if (loading) {
    return <></>;
  }
  let content;
  if (user) {
    content = <ProductList />;
  } else {
    content = <SignIn />;
  }
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      {content}
    </div>
  );
}

export default App;
