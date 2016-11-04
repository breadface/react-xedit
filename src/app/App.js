import React, { Component } from 'react'
import EditableText from  './components/EditableText'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.closeModal = this.closeModal.bind(this)

    this.state = {
      showModal: false
    }
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({showModal: true})
  }

  closeModal() {
    this.setState({showModal: false})
  }

  render() {
    return (
      <div>
        <EditableText
          editMode={true}
          show={this.state.showModal}
          onCancel={this.closeModal}
        />
          <span onClick={this.handleClick}>This can be edited</span>
      </div>
    )
  }
}

export default App
