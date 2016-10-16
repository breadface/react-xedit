// @flow

import React, { Component } from 'react'

type Props = {
  editMode: boolean,
  children: string,
}

type DefaultProps = {
  editMode: boolean
}

//TODO: use text area for more lines of text

class EditableText extends Component {
  props: Props
  handleClick: () => void
  bindToState: (prop: string) => {onChange: (e: Object) => void}

  static defaultProps: DefaultProps

  state: {
    inputValue: string,
    toggleEdit: boolean
  }

  constructor(props: Props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.bindToState = this.bindToState.bind(this)

    let { children} = props


    this.state = {
      inputValue: children || "",
      toggleEdit: false
    }
  }

  handleClick() {
    this.setState({toggleEdit: !this.state.toggleEdit})
  }

  bindToState(prop: string) {
    if(!prop) {
      throw Error('Props cannot be undefined')
    }

   return {
      onChange: (e: Object) => {
        e.preventDefault()
        this.setState({ [prop]: e.target.value })
      }
    }
  }

  render() {
    let { inputValue, toggleEdit } = this.state
    if (this.props.editMode) {
      if (toggleEdit) {
        return (
          <div>
            <textarea
              type="text"
              value={inputValue}
              {...this.bindToState('inputValue')}
            />
            <button onClick={e => this.handleClick()}>save</button>
          </div>
        )
      } else {
        return <span
          onClick={e => this.handleClick()}
          children={inputValue}
        />
      }
    }

    return (
      <span children={inputValue} />
    )
  }
}


EditableText.defaultProps = {
  editMode: false
}

export default EditableText
