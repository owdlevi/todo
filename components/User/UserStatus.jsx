/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useFirebaseAuth, useAuthUserInfo } from '../../utils/auth/hooks'
import logout from '../../utils/auth/logout'

const UserStatus = (props) => {
  const { initializing, user } = useFirebaseAuth()
  return user ? (
    <div>
      {user.displayName}
      <img
        sx={{
          maxWidth: '50px',
          borderRadius: '50%'
        }}
        src={user.photoURL}
        alt={user.displayName}
      />
    </div>
  ) : (
    <div>Sign In</div>
  )
}
export default UserStatus
