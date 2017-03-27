import React from 'react'
import EditableText from './components/EditableText'
import EditableTextArea from './components/EditableTextArea'
import EditableSelect from './components/EditableSelect'

class App extends React.Component {
  render() {
    return (
      <div>
        <EditableSelect
          editable={true}
          menuOptions={['one', 'two', 'tree', 'four']}
          >
        </EditableSelect>
      </div>
    )
  }
}

export default App
