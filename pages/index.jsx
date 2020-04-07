import React from 'react'
import Layout from '../components/Layout'
import Todo from '../components/Todo'
import Garden from '../components/Garden'

import PropTypes from 'prop-types'
import { get } from 'lodash/object'
import Link from 'next/link'
import Router from 'next/router'
import withAuthUser from '../utils/pageWrappers/withAuthUser'
import withAuthUserInfo from '../utils/pageWrappers/withAuthUserInfo'
import logout from '../utils/auth/logout'

const Index = (props) => {
  const { AuthUserInfo, data } = props
  const AuthUser = get(AuthUserInfo, 'AuthUser', null)

  return (
    <Layout>
      <p>Hi there!</p>
      {!AuthUser ? (
        <p>
          You are not signed in.{' '}
          <Link href={'/auth'}>
            <a>Sign in</a>
          </Link>
        </p>
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
      {AuthUser ? (
        <div>
          <Garden AuthUserID={AuthUser.id} />
          <Todo AuthUserID={AuthUser.id} />
        </div>
      ) : (
        ``
      )}
    </Layout>
  )
}

Index.displayName = 'Index'

Index.propTypes = {
  AuthUserInfo: PropTypes.shape({
    AuthUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      emailVerified: PropTypes.bool.isRequired
    }),
    token: PropTypes.string
  }),
  data: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string
    }).isRequired,
    favoriteFood: PropTypes.string.isRequired
  }).isRequired
}

Index.defaultProps = {
  AuthUserInfo: null
}

// Use `withAuthUser` to get the authed user server-side, which
// disables static rendering.
// Use `withAuthUserInfo` to include the authed user as a prop
// to your component.
export default withAuthUser(withAuthUserInfo(Index))
