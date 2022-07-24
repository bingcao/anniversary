import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";
import { app } from "./firebase";
import ProductList from "./ProductList";
import SignIn from "./SignIn";

function App() {
  const [user, loading, error] = useAuthState(getAuth(app));
  if (loading) {
    return <></>;
  }
  if (user) {
    return <ProductList />;
  } else {
    return <SignIn />;
  }
}

export default App;
