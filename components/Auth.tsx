'use client'
import { useSyncUser } from "@/hook/useSyncUser"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"


const Auth = () => {
  useSyncUser()

  return ( 
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
   );
}
 
export default Auth;