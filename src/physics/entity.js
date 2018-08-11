class Entity {
  constructor(props) {
    this.id = props.id || -1
    this.size = props.size || 10
    this.maxSpeed = props.maxSpeed || 100
    this.maxForce = props.maxForce || 5
  }
}

export default Entity