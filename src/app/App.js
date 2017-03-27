import React from 'react'
import EditableText from './components/editable/EditableText'
import EditableTextArea from './components/editable/EditableTextArea'
import EditableSelect from './components/editable/EditableSelect'

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
