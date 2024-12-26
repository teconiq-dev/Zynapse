import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
export function signOutGoogle() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
    });
}
