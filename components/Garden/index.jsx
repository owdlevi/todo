/** @jsx jsx */
import { jsx } from 'theme-ui'
import Sun from './Sun'
import Flower from './Flower'

const Garden = ({ todoCount, completed }) => {
  const show = completed > 2 ? true : false
  return (
    <div
      sx={{
        pointerEvents: 'none',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }}>
      <div
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}>
        <div
          sx={{
            width: '10rem',
            position: 'absolute',
            top: '40px',
            right: '40px'
          }}>
          <Sun completed={completed} />
        </div>
        <div
          sx={{
            width: '7.5rem',
            position: 'absolute',
            bottom: '40px',
            right: '40px'
          }}>
          <Flower show={show} />
        </div>
      </div>
    </div>
  )
}

export default Garden
