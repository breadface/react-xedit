import React from 'react'
import  { FormControl } from 'react-bootstrap'
import EditableField from './EditableField'


class EditableText extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: this.props.children
    }
  }

  render() {
    let { editable } = this.props
    let { content } = this.state

    return (
      <EditableField
        editable={editable}
        text={content}
        setText={content => this.setState({content})}
      >{(content, handleChange) => {
        return (
          <FormControl
            type="text"
            value={content}
            onChange={handleChange}
          />
        )
      }}
      </EditableField>
    )
  }
}

export default EditableText
