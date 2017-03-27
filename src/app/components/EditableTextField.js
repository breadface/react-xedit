import React from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import PopoverOverlay from './PopoverOverlay'
import CustomOverlay from './CustomOverlay'

class EditableTextField extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editMode: this.props.editable || false,
      text: this.props.children || "",
      show: false
    }
  }

  render() {
    let { editMode, text, show } = this.state

    let setText = (text) => this.setState({text})
    let toggleShow = () => this.setState({show: !show})

    if(editMode)
      return (
        <div>
          <span onClick={toggleShow}>{text}</span>
          <CustomOverlay
            show={show}
            >
            <PopoverOverlay
              content={text}
              toggleShow={toggleShow}
              setText={setText}
            />
          </CustomOverlay>
        </div>
      )

    return text
  }
}

export default EditableTextField
