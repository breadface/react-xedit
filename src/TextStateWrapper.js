//@flow
import React, { Component } from 'react'


class WrapTextState extends Component {
  props: {
    onHide: () => void,
    setTextValue: (text: string) => void,
    editableText: string,
    children: (text: string, handleChange: (e: any) => void) => React$Element<*>
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
export default WrapTextState
