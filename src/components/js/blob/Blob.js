import React from 'react'
import { useTrail, animated } from 'react-spring'
import './styles.css'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 40 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function Blob() {
  const [trail, set] = useTrail(3, () => ({ xy: [window.innerWidth*0.75, window.innerHeight*0.35], config: i => (i === 0 ? fast : slow) }))
  return (
    <div className="blob-background">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo" colorInterpolationFilters="sRGB" filterRes={1200}>
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30"/>
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 2 0 0 0 0 0 9 -7" />
        </filter>
      </svg>
      <div className="hooks-main safari_only" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
        ))}
      </div>
    </div>
  )
}

//<feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 2 0 0 0 0 0 9 -7" />