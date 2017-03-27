import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import EditableField from '../EditableField'

class EditableSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedKey: 0
    }
  }

  render() {
    let { editable, title, menuOptions } = this.props
    let { selectedKey } = this.state

    let optionList = menuOptions.map((item, index) => {
      return (
        <MenuItem
          key={index}
          eventKey={index}
          children={item}
        />
      )
    })

    return (
      <EditableField
        editable={editable}
        text={menuOptions[selectedKey]}
        title={title}
        setText={selectedKey => this.setState({selectedKey})}
      >{(selectedKey, handleChange) => {
        return (
          <DropdownButton
            title={Number(selectedKey)? menuOptions[selectedKey]: selectedKey}
            id="dropdown-menu"
            onSelect={handleChange}
            >
              { optionList }
          </DropdownButton>
        )
      }}
      </EditableField>
    )
  }
}

export default EditableSelect
