/* globals window */
import React, { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'
import initFirebase from '../utils/auth/initFirebase'

// Init the Firebase app.
initFirebase()

const firebaseAuthConfig = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    },
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      scopes: ['public_profile', 'email', 'user_likes', 'user_friends'],
      customParameters: {
        // Forces password re-entry.
        auth_type: 'reauthenticate'
      }
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID, // Twitter does not support scopes.
    firebase.auth.EmailAuthProvider.PROVIDER_ID // Other providers don't need to be given as object.
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none'
}

const FirebaseAuth = () => {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true)
    }
  }, [])
  return <div>{renderAuth ? <StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth={firebase.auth()} /> : null}</div>
}

export default FirebaseAuth
