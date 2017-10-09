export var store = {
  debug: true,
  state: {
    message: 'Hello!',
    direction: 'in'
  },
  setMessageAction (newValue) {
    this.state.message = newValue
  },
  clearMessageAction () {
    this.state.message = ''
  },
  directionAction (val) {
    this.state.direction= val
  },
}
