"use client";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { UserDetails } from "../context/userContext";

export default function SigninButton() {
  const provider = new GoogleAuthProvider();
  const { user, setUser } = UserDetails();

  function signInGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.log(token, user);
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  }

  function signOutGoogle() {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      {user ? (
        <div className="dropdown dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar online placeholder"
          >
            <div className="bg-neutral text-neutral-content w-10 rounded-full">
              <span className="text-lg">{user.displayName.charAt(0)}</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-auto p-2 shadow"
          >
            <div className="badge badge-secondary">{user.email}</div>
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a onClick={signOutGoogle}>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <button
          onClick={signInGoogle}
          className="btn btn-primary btn-sm md:btn-md"
        >
          Signin
        </button>
      )}
    </>
  );
}
