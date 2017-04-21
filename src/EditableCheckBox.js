import React, { Component, Element } from 'react'
import Popover from './utils/Popover'

//@flow

type editableItems = Array<{name: string, checked: boolean}>

class WrapCheckBoxState extends Component {
  props: {
    onHide: () => void,
    setTextValue: (text: editableItems) => void,
    editableItems: editableItems,
    children: (editableItems: editableItems, handleChange: (index: number) => (e: any) => void) => Element<any>
  }

  state = {
    items: this.props.editableItems
  }

  render() {
    let { onHide, children } = this.props

    let handleChange = index => (e) => {
      let { checked } = e.target
      let checkedItem = { ...this.state.items[index], checked }
      let head = this.state.items.slice(0, index)
      let tail = this.state.items.slice(index + 1)
      let items = [...head, checkedItem, ...tail]

      this.setState({items})
    }

    let handleSave = () => {
      this.props.setTextValue(this.state.items)
      this.props.onHide()
    }

    return (
      <div>
        { children(this.state.items, handleChange) }
        <button onClick={handleSave}>ok</button>
        <button onClick={onHide}>cancel</button>
      </div>
    )
  }
}

//@flow

class EditableCheckBox extends Component {
  state: {
    text: string,
    show: boolean
  }

  state = {
    items: this.props.options.map(item => ({name: item, checked: true})),
    show: false
  }

  render() {
    let onHide = () => {
      this.setState({show: false})
    }

    let setTextValue = items => {
      this.setState({items})
    }

    let handleClick = () => {
      this.setState({show: !this.state.show})
    }

    let editableItems = this.state.items.filter(item => item.checked)
    .map((items, index) =>
      <div
        key={index}
        children={items.name}
      />
    )

    return (
      <Popover
        show={this.state.show}
        offset={20}
        text={<span onClick={handleClick}>{editableItems}</span>}
        >
          <WrapCheckBoxState
            onHide={onHide}
            setTextValue={setTextValue}
            editableItems={this.state.items}
            >
              { (editedItems, onChange) => {
                return this.props.options.map(item => ({name: item, checked: true}))
                  .map((items, index) => {
                  return(
                    <div key={index}>
                      <input
                        onChange={onChange(index)}
                        type="checkbox"
                        checked={editedItems[index].checked}
                      />
                      <label>{items.name}</label>
                    </div>
                  )
                })
              }}
          </WrapCheckBoxState>
      </Popover>
    )
  }
}

export default EditableCheckBox
