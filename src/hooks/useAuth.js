import { useState, useEffect } from 'react';

export const useAuth = authFirebase => {
  const [authentication, setAuthentication] = useState(null);
  const auth = authFirebase();

  const provider = new authFirebase.GoogleAuthProvider();
  const logIn = () => auth.signInWithPopup(provider);

  const logOut = () =>
    auth
      .signOut()
      .then()
      .catch(err => console.error());

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        setAuthentication(user);
      } else setAuthentication(null);
    });
  }, [auth, authentication]);

  return { authentication, logIn, logOut };
};
