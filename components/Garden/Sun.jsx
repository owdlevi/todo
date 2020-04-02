import React from 'react'
import { useSpring, animated } from 'react-spring'

import SunSVG from '../../assets/sun.svg'

const Sun = ({ completed }) => {
  const zoom = useSpring({
    transform: completed ? `translateX(0) scale(1)` : `translateX(150%) scale(0.5)`
  })
  return (
    <animated.div style={zoom}>
      <SunSVG />
    </animated.div>
  )
}

export default Sun
