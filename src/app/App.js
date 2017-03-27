import React from 'react'
import EditableTextField from './components/EditableTextField'

class App extends React.Component {
  render() {
    return (
      <div>
        <EditableTextField
          editable={true}
          >
          Welcome home buddy
        </EditableTextField>
      </div>
    )
  }
}

export default App
