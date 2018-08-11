export default function listReducer(state=[], action) {
  switch(action.type) {
    case 'UPDATE_ENTITY':
      // { entity, type }
      return state

    case 'ADD_ENTITY':
      // { entity, type }
      return state

    case 'REMOVE_ENTITY':
      // { entity, type }
      return state

    default:
      return state
  }
}
