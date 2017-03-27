import React from 'react'
import EditableText from './components/EditableText'
import EditableTextArea from './components/EditableTextArea'

class App extends React.Component {
  render() {
    return (
      <div>
        <EditableText
          editable={true}
          title="Email"
          >
          Welcome home buddy
        </EditableText>
      </div>
    )
  }
}

export default App
