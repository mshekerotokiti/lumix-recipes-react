import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    RedirectToSignIn,
  } from "@clerk/clerk-react";
import RecipePage from "./RecipePage";
import React from 'react'
const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
export const Auth = () => {
  return (
    <ClerkProvider publishableKey={clerk_pub_key}>
    <SignedIn>
      <RecipePage />
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </ClerkProvider>
  )
}


