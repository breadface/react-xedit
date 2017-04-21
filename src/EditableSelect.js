import React, { Component } from 'react'
import EditableField from './EditableField'

//@flow

class EditableSelect extends Component {
  state = {
    text: this.props.options[0]
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
        { (value, onChange) => {
          return (
            <select value={value} onChange={onChange}>
              {
                this.props.options.map((value,  index) => {
                  return <option value={value} key={index}>{value}</option>
                })
              }
            </select>
          )
        } }
      </EditableField>
    )
  }
}

export default EditableSelect
