import React, { Component, Element } from 'react'
import Popover from './utils/Popover'
import WrapTextState from './TextStateWrapper'

//@flow

class EditableSelect extends Component {
  state: {
    text: string,
    show: boolean
  }

  state = {
    text: this.props.options[0],
    show: false
  }

  render() {
    let onHide = () => {
      this.setState({show: false})
    }

    let setTextValue = text => {
      this.setState({text})
    }

    let handleClick = () => {
      this.setState({show: !this.state.show})
    }

    return (
      <Popover
        show={this.state.show}
        offset={20}
        text={<span onClick={handleClick}>{this.state.text}</span>}
        >
          <WrapTextState
            onHide={onHide}
            setTextValue={setTextValue}
            editableText={this.state.text}
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
          </WrapTextState>
      </Popover>
    )
  }
}

export default EditableSelect
