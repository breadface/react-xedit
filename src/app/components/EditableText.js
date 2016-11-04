import React, { Component, PropTypes } from 'react'
import EditableModal from './EditableModal'

class EditableText extends Component {
  constructor(props: Props) {
    super(props)

    this.bindToState = this.bindToState.bind(this)

    let { children} = props


    this.state = {
      inputValue: children || ""
    }
  }

  bindToState(prop: string) {
    if(!prop) {
      throw Error('Props cannot be undefined')
    }

   return {
      onChange: e => {
        e.preventDefault()
        this.setState({ [prop]: e.target.value })
      }
    }
  }

  render() {
    let { inputValue } = this.state
    let { show, onCancel, onSave } = this.props

    if (this.props.editMode) {
      return (
        <div>
          <EditableModal
            isOpen={show}
            toClose={onCancel}
          >
            <textarea
              type="text"
              value={inputValue}
              {...this.bindToState('inputValue')}
            />
          </EditableModal>
        </div>
      )
    }

    return (
      <span children={inputValue} />
    )
  }
}

//TODO valid children must be string - validate children

EditableText.defaultProps = {
  editMode: false,
  show: false
}

EditableText.propTypes = {
  editMode: PropTypes.bool,
  onSave: PropTypes.func,
  onCancel: PropTypes.func
}

export default EditableText
