import React from 'react'
import Layout from '../components/Layout'
import FirebaseAuth from '../components/FirebaseAuth'

const Auth = () => {
  return (
    <Layout>
      <p>Sign in</p>
      <div>
        <FirebaseAuth />
      </div>
    </Layout>
  )
}

Auth.propTypes = {}

export default Auth
