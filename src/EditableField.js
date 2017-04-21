//@flow
import React,  { Component, Element } from 'react'
import Popover from './utils/Popover'

class WrapTextState extends Component {
  props: {
    onHide: () => void,
    setTextValue: (text: string) => void,
    editableText: string,
    children: (text: string, handleChange: (e: any) => void) => Element<any>
  }

  state = {
    text: this.props.editableText
  }

  render() {
    let { onHide, children } = this.props

    let handleChange = (e) => {
      let { value } = e.target
      this.setState({text: value})
    }

    let handleSave = () => {
      this.props.setTextValue(this.state.text)
      this.props.onHide()
    }

    return (
      <div>
        { children(this.state.text, handleChange) }
        <button onClick={handleSave}>ok</button>
        <button onClick={onHide}>cancel</button>
      </div>
    )
  }
}


class EditableField extends Component {
  state: {
    show: boolean
  }

  state = {
    show: false
  }

  render() {
    let { text, setTextValue } = this.props
    let onHide = () => {
      this.setState({show: false})
    }

    let handleClick = () => {
      this.setState({show: !this.state.show})
    }

    return (
      <Popover
        show={this.state.show}
        offset={20}
        text={<span onClick={handleClick}>{this.props.text}</span>}
        >
          <WrapTextState
            onHide={onHide}
            setTextValue={setTextValue}
            editableText={text}
            children={ (text, handleChange) => this.props.children(text, handleChange) }
          />
      </Popover>
    )
  }
}

export default EditableField
