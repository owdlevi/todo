import React from 'react'
import Router from 'next/router'
import FirebaseAuth from '../FirebaseAuth'
import { get } from 'lodash/object'

import logout from '../../utils/auth/logout'

const UserStatus = props => {
  return (
    <div>
      {!AuthUser ? (
        <FirebaseAuth />
      ) : (
        <div>
          <p>You're signed in. Email: {AuthUser.email}</p>
          <p
            style={{
              display: 'inlinelock',
              color: 'blue',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
            onClick={async () => {
              try {
                await logout()
                Router.push('/')
              } catch (e) {
                console.error(e)
              }
            }}>
            Log out
          </p>
        </div>
      )}
    </div>
  )
}
export default UserStatus
