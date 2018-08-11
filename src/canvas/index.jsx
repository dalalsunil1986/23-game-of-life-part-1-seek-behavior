import React from 'react'
import './canvas.css'

export default function( props ) {
  return <div
    className="canvas"
    style={{
      height: document.documentElement.clientHeight,
      width: document.documentElement.clientWidth,
    }}
  >
  </div>
}