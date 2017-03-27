import React from 'react'
import PopoverOverlay from './PopoverOverlay'
import CustomOverlay from './CustomOverlay'

class EditableField extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  render() {
    let { show } = this.state
    let { setText, text, children, title } = this.props

    let toggleShow = () => this.setState({show: !show})

    let header = title ? title : "text"

    if(this.props.editable)
      return (
        <div>
          <span
            onClick={toggleShow}
            children={text}
          />
          <CustomOverlay
            show={show}
            >
            <PopoverOverlay
              title={header}
              content={text}
              toggleShow={toggleShow}
              setText={setText}
            >{ (content, handleChange) => children(content, handleChange) }
            </PopoverOverlay>
          </CustomOverlay>
        </div>
      )

    return text
  }
}

export default EditableField
