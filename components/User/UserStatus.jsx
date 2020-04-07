/** @jsx jsx */
import { jsx } from 'theme-ui'
import { get } from 'lodash/object'
import Link from 'next/link'
import Router from 'next/router'
import { useFirebaseAuth, useAuthUserInfo } from '../../utils/auth/hooks'
import logout from '../../utils/auth/logout'

const UserStatus = (props) => {
  const { initializing, user } = useFirebaseAuth()
  const AuthUser = get(useAuthUserInfo(), 'AuthUser', null)
  return user ? (
    <div>
      {user.photoURL && (
        <img
          sx={{
            maxWidth: '50px',
            borderRadius: '50%'
          }}
          src={user.photoURL}
          alt={user.displayName}
        />
      )}
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
  ) : (
    <div>
      <Link href={'/auth'}>
        <a>Sign in</a>
      </Link>
    </div>
  )
}
export default UserStatus
