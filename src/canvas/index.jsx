import React from 'react'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from './mappings'

import './canvas.css'

class Canvas extends React.Component {
  componentWillMount() {

  }

  render() {
    return <div
      className="canvas"
      style={{
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
      }}
    >

    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)