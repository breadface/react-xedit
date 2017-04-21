import React, { Component, Element } from 'react'
import Popover from './utils/Popover'
import WrapTextState from './TextStateWrapper'
//@flow

class EditableText extends Component {
  props: {
    editable: boolean
  }

  state: {
    text: string,
    show: boolean
  }

  state = {
    text: this.props.children,
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

    if(!this.props.editable)
      return <span>{this.props.children}</span>

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
            { (value, onChange) => <input type="text" onChange={onChange} value={value} /> }
          </WrapTextState>
      </Popover>
    )
  }
}

export default EditableText
