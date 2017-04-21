import React, { Component } from 'react'
import EditableField from './EditableField'

//@flow

class EditableText extends Component {
  state = {
    text: this.props.children
  }

  render() {
    let setTextValue = text => {
      this.setState({text})
    }

    return (
      <EditableField
        text={this.state.text}
        setTextValue={setTextValue}
      >
        { (value, onChange) => <input type="text" onChange={onChange} value={value} /> }
      </EditableField>
    )
  }
}

export default EditableText
