import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal'
import EditableModalClose from './EditModalClose'

const modalStyle = {
  overlay: {
    zIndex: "1001",
    backgroundColor: "rgba(59,63,67,0.8)",
  },
  content: {
    width: "500px",
    maxWidth: "90%",
    maxHeight: "80%",
    overflowY: "scroll",
    position: "relative",
    top: 40,
    left: 0,
    right: 0,
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "0px",
    bottom: 0
  }
}

class EditableModal extends Component {
  render() {
    let { isOpen, toClose} = this.props
    return (
      <Modal
        isOpen={isOpen}
        style={modalStyle}
        onRequestClose={toClose}
      >
        <EditableModalClose onClick={toClose} />
        {this.props.children}
      </Modal>
    )
  }
}

EditableModal.defaultProps = {
  isOpen: false
}

EditableModal.propTypes = {
  isOpen: PropTypes.bool,
  toClose: PropTypes.func.isRequired
}


export default EditableModal
