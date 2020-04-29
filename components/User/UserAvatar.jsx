/** @jsx jsx */
import { jsx } from 'theme-ui'
import logout from '../../utils/auth/logout'

const UserAvatar = ({ user }) => {
  return (
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
  )
}

export default UserAvatar
