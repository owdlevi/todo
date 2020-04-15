import React, { useState, useEffect } from 'react'
import useInterval from '../../hooks/useInterval'
import { useSpring, animated, config } from 'react-spring'

import FlowerSVG from '../../assets/flower_1.svg'

const Flower = ({ show }) => {
  const [leafColor, setLeafColor] = useState(['35b6b4', '35b6b4'])
  const delay = 4000

  useInterval(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    console.log(`First color ${leafColor[1]}, second color ${randomColor}`)
    setLeafColor([leafColor[1], randomColor])
  }, delay)

  const animation = useSpring({
    transform: show ? `translateY(0) scale(1)` : `translateY(150%) scale(0.5)`
  })
  const props = useSpring({ color: `#${leafColor[1]}`, from: { color: `#${leafColor[0]}` } })
  return (
    <animated.div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 325.9">
        <g id="Layer_2" data-name="Layer 2">
          <g id="daffodil">
            <path fill="#a0b100" d="M73.1 82.8h3.8V288h-3.8z" />
            <path
              fill="#a0b100"
              d="M150 142.8c-18.5 6.3-54.4 15.3-74.4 61.2 39.2-3 49.8-41.4 74.4-61.2zM0 142.8c18.5 6.3 54.4 15.3 74.4 61.2-39.3-3-49.9-41.4-74.4-61.2z"
            />
            <path fill="#fc0" d="M39.6 0c2 21.6-8.3 63.5 35.4 61.2C98.8 24.5 57.3 12.5 39.6 0z" />
            <path fill="#fc0" d="M4.3 61.2c19.7 9 50.8 39 70.7 0-19.9-39-51-9-70.7 0z" />
            <path fill="#fc0" d="M39.6 122.4C57.3 110 98.8 98 75 61.2c-43.7-2.3-33.4 39.6-35.4 61.2z" />
            <path fill="#fc0" d="M110.3 122.4c-2-21.6 8.4-63.5-35.3-61.2C51 98 92.6 110 110.3 122.4z" />
            <path fill="#fc0" d="M145.7 61.2c-19.7-9-50.9-39-70.7 0 19.8 39 51 9 70.7 0z" />
            <path fill="#fc0" d="M110.3 0C92.6 12.5 51.1 24.5 75 61.2c43.7 2.3 33.3-39.6 35.3-61.2z" />
            <path
              fill="#f39200"
              d="M96 62.2c0 1-2.3 1.7-2.4 2.6s1.8 2.4 1.5 3.3-2.6 1-3 1.9 1 2.7.5 3.5-2.8.3-3.4 1 .2 2.9-.5 3.5-2.8-.5-3.6 0-.6 2.8-1.4 3.2-2.5-1.2-3.4-1-1.4 2.6-2.3 2.7-2-1.9-3-1.9-2 2-3 2-1.4-2.5-2.3-2.8-2.6 1.4-3.4 1-.7-2.7-1.5-3.2-2.8.6-3.5 0 0-2.8-.5-3.5-3-.2-3.4-1 .9-2.7.5-3.5-2.8-1-3-2 1.6-2.2 1.5-3.2-2.4-1.7-2.4-2.6 2.2-1.8 2.3-2.7-1.7-2.3-1.5-3.2 2.6-1.1 3-2-1-2.7-.5-3.5 2.8-.2 3.4-1-.2-2.9.5-3.5 2.8.5 3.6 0 .6-2.8 1.4-3.2 2.5 1.3 3.4 1 1.4-2.6 2.4-2.7 2 2 3 2 2-2.1 3-2 1.4 2.4 2.3 2.7 2.5-1.4 3.4-1 .7 2.7 1.4 3.2 2.9-.6 3.6 0-.1 2.8.5 3.5 2.9.2 3.4 1-.9 2.7-.5 3.6 2.7 1 3 1.9-1.6 2.2-1.5 3.2 2.3 1.7 2.3 2.7z"
            />
            <path
              d="M90.9 62.2c0 .7-1.7 1.3-1.8 2s1.3 1.7 1.1 2.4-2 .8-2.2 1.4.7 2.1.4 2.7-2.2.2-2.6.8.1 2.2-.4 2.6-2-.4-2.7 0-.5 2.2-1.1 2.5-1.9-1-2.6-.8-1 2-1.8 2-1.5-1.4-2.2-1.4-1.6 1.6-2.3 1.5-1-1.8-1.7-2-2 1-2.6.8-.5-2.1-1.1-2.5-2.2.5-2.7 0 0-2.1-.4-2.7-2.2-.1-2.6-.7.7-2 .4-2.7-2-.7-2.3-1.4 1.3-1.8 1.2-2.5-1.8-1.3-1.8-2 1.7-1.3 1.8-2-1.4-1.8-1.2-2.5 2-.8 2.3-1.4-.8-2-.4-2.7 2.1-.2 2.6-.7-.2-2.2.4-2.7 2 .4 2.7 0 .4-2.1 1-2.4 2 1 2.7.7 1-2 1.7-2S74.3 48 75 48s1.5-1.6 2.3-1.5 1 1.9 1.7 2 2-1 2.6-.7.5 2 1.1 2.4 2.2-.5 2.7 0-.1 2.1.4 2.7 2.2.1 2.6.7-.7 2-.4 2.7 2 .7 2.2 1.4-1.2 1.7-1 2.4 1.7 1.3 1.7 2z"
              fill="#fff6cc"
            />
            <path
              fill="#f39200"
              d="M82.4 62.2c0 .3-.8.6-.8 1s.6.7.5 1-1 .4-1 .7.3 1 .2 1.3-1 0-1.2.3 0 1-.2 1.2-1-.1-1.3 0-.2 1-.5 1.2-.9-.5-1.2-.4-.5 1-.8 1-.7-.7-1-.7-.8.7-1 .7-.6-.9-.9-1-.9.5-1.2.4-.2-1-.5-1.2-1 .3-1.3 0 0-1-.1-1.2-1 0-1.2-.3.3-1 .1-1.3-1-.3-1-.7.6-.8.6-1-.9-.7-.9-1 .8-.7.9-1-.6-.9-.6-1.2 1-.3 1-.6-.3-1-.1-1.3 1 0 1.2-.3-.1-1 .1-1.3 1 .2 1.3 0 .2-1 .5-1.1.9.4 1.2.3.5-.9.8-1 .7.8 1 .8.8-.8 1-.7.6.8.9 1 1-.6 1.2-.4.2 1 .5 1.1 1-.2 1.3 0 0 1 .2 1.3 1 0 1.2.3-.4 1-.2 1.3 1 .3 1 .6-.6.8-.5 1.2.8.6.8 1z"
            />
            <path d="M47 324.1a221.5 221.5 0 0055.9 0l6.2-68.7H40.8z" fill="#e94a63" />
            <path
              fill="#ee757f"
              d="M90.6 255.4h-5l-41 41 .4 4.6 45.6-45.6zM79.3 255.4h-5L43.7 286l.4 4.6 35.3-35.3zM68 255.4h-4.9l-20.4 20.4.4 4.5 25-25zM56.8 255.4h-5l-10 10 .4 4.6 14.6-14.6zM40.8 255.4l.4 4.2 4.3-4.2h-4.7zM105.9 291.5L71.5 326h5l28.9-28.9zM104.3 309.4l.5-5.5-21.9 21.8 5.2-.2zM106.5 284.6l.5-5.5-46.3 46.3 4.7.3zM101.9 255.4h-5l-51.4 51.4.4 4.6 56-56zM103.1 321.8l.5-5.5L95 325l5.5-.6zM107.6 272.2l.5-5.5-57.7 57.8 4.4.5zM108.7 259.8l.4-4.4h-.9l-61.8 61.8.4 4.5 62-62z"
            />
            <animated.path fill={props.color} d="M111 268.8l.3-25q-36.3 1.7-72.7 0l.3 25q36.1 1.7 72.1 0z" />
          </g>
        </g>
      </svg>
    </animated.div>
  )
}

export default Flower
