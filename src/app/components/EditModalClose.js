import React, { PropTypes } from 'react'

const EditableModalClose = ({onClick}) => {
  return (
    <div>
      <a onClick={onClick} href="#">
        <span children="close" />
      </a>
    </div>
  )
}

EditableModalClose.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default EditableModalClose
