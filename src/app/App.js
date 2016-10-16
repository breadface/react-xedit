import React, { Component } from 'react'
import EditableText from  './components/EditableText'

class App extends Component {
  render() {
    return (
      <div>
        <EditableText editMode={true}>This can be edited</EditableText>
      </div>
    )
  }
}

export default App
