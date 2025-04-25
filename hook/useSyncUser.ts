'use client'

import { useEffect } from "react";
import { useUser, useClerk } from "@clerk/nextjs";

export const useSyncUser = () => {
  const {isSignedIn} = useUser()
  const { signOut } = useClerk()

  useEffect(() => {
    if (isSignedIn && !localStorage.getItem('userSynced')) {
      fetch('/api/sync-user', {method: "POST"})
        .then(() => {
          localStorage.setItem("userSynced", "true");
        })
        .catch((error) => {
          console.log("User sync failed", error)
        })
    }
  }, [isSignedIn])

  const resetUserSync = () => {
    localStorage.removeItem("userSynced");
    signOut(); 
  }
  return { resetUserSync }
}