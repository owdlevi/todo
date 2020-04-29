import * as firebase from 'firebase/app'
import 'firebase/auth'

const provider = new firebase.auth.GoogleAuthProvider()

export const loginWithGoogle = async () => {
  try {
    const result = await firebase.auth().signInWithPopup(provider)
  } catch (err) {
    console.error(err)
    throw err
  }
}

const github = new firebase.auth.GithubAuthProvider()

export const loginWithGithub = async () => {
  try {
    const result = await firebase.auth().signInWithPopup(github)
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const loginWithEmail = async (email, password) => {
  try {
    const results = await firebase.auth().signInWithEmailAndPassword(email, password)
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const createUserWithEmail = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const signOut = () => firebase.auth().signOut()
