import React from 'react'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from './mappings'

import Specimen from '../physics/specimen'

import './canvas.css'

class Canvas extends React.Component {
  componentWillMount() {
    this.props.actions.addSpecimen(new Specimen({
      id: 1, x: 200, y: 200,
    }))
  }

  render() {
    return <div
      className="canvas"
      style={{
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
      }}
    >
    {
      this.props.specimens.map(specimen => <div
        className="specimen entity"
        style={{
          top: specimen.position.y,
          left: specimen.position.x,
          width: specimen.size,
          height: specimen.size,
        }}
      />)
    }
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)