import React from "react";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { app } from "../firebase";
import StyledFirebaseAuth from "./StyledFirebaseAuth";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

export default function SignIn() {
  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth(app)} />;
}
