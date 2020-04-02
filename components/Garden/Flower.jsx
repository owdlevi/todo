import React from 'react'
import { useSpring, animated } from 'react-spring'

import FlowerSVG from '../../assets/flower_1.svg'

const Flower = ({ show }) => {
  const animation = useSpring({
    transform: show ? `translateY(0) scale(1)` : `translateY(150%) scale(0.5)`
  })
  return (
    <animated.div style={animation}>
      <FlowerSVG />
    </animated.div>
  )
}

export default Flower
