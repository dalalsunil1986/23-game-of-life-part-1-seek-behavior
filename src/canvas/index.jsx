import React from 'react'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from './mappings'

import './canvas.css'

function Canvas( props ) {
  return <div
    className="canvas"
    style={{
      height: document.documentElement.clientHeight,
      width: document.documentElement.clientWidth,
    }}
  >
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)