import React from 'react'
import EditableField from '../EditableField'

class EditableTextArea extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: this.props.children
    }
  }

  render() {
    let { editable, title } = this.props
    let { content } = this.state

    return (
      <EditableField
        editable={editable}
        text={content}
        title={title}
        setText={content => this.setState({content})}
      >{(content, handleChange) => {
        return (
          <textarea
            value={content}
            onChange={handleChange}
          />
        )
      }}
      </EditableField>
    )
  }
}

export default EditableTextArea
