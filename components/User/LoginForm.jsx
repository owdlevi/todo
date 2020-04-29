/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import { useSpring, animated } from 'react-spring'
import { loginWithGoogle } from '../../lib/auth'
// import FirebaseAuth from '../FirebaseAuth'

const LoginForm = ({ showLogin }) => {
  const [show, setShow] = useState(false)
  const [renderAuth, setRenderAuth] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true)
    }
  }, [])

  useEffect(() => {
    setShow(showLogin)
  }, [showLogin])

  const modal = useSpring({
    visibility: show ? 'visible' : 'hidden',

    transform: show ? 'scale(1) translate3d(0,0,0)' : 'scale(0.8) translate3d(100%,0,0)'
  })

  function login(fn) {
    return async () => {
      try {
        // setError("");
        // setLoading(true);
        await fn()
        // setRedirectToReferrer(true);
      } catch (err) {
        // setLoading(false);
        // setError(err.message || "Please try again.");
      }
    }
  }

  return (
    <animated.div
      style={modal}
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '64px',
        left: 0,
        backgroundColor: 'transparent',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <div
        onClick={() => setShow(false)}
        sx={{
          width: '320px',
          height: '518px',
          background: '#FFE7A2',
          borderRadius: '4px 0px 0px 4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <div>
          <img src="/assets/signin-bg.png" alt="" />
        </div>
      </div>
      <div
        sx={{
          width: '460px',
          height: '518px',
          background: '#FFFFFF',
          borderRadius: '0px 4px 4px 0px',
          p: '30px'
        }}>
        <h3
          sx={{
            fontWeight: 'bold',
            fontSize: '24px',
            lineHeight: '24px',
            textAlign: 'left',
            letterSpacing: '-0.015em',
            color: '#444444'
          }}>
          Sign in
        </h3>
        {renderAuth ? (
          <div>
            <button
              onClick={login(loginWithGoogle)}
              sx={{
                border: '1px solid #CDCDCD',
                boxSizing: 'border-box',
                borderRadius: '2px',
                width: '100%',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
              <img src="/assets/Google__G__Logo 1.svg" alt="Sign in with Google" />
              <span
                sx={{
                  fontSize: '15px',
                  lineHeight: '15px',
                  letterSpacing: '-0.015em',
                  color: '#898989',
                  display: 'inline-block',
                  ml: '10px'
                }}>
                Sign in with Google
              </span>
            </button>
            {/* <FirebaseAuth /> */}
          </div>
        ) : null}
      </div>
    </animated.div>
  )
}

export default LoginForm
