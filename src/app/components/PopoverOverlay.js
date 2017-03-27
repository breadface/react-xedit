import React from 'react'
import { Popover, Button } from 'react-bootstrap'

class PopoverOverlay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: this.props.content || ""
    }
  }

  render() {
    let { content } = this.state
    let  { setText, toggleShow } = this.props
    let handleChange = e => {
      let content = e.target.value
      this.setState({content})
    }

    return (
      <Popover
        id="popover-trigger-click-root-close"
        title="Edit content"
      >
        <div>
          <input
            value={content}
            onChange={handleChange}
          />
          <Button
            bsStyle="primary"
            bsSize="small"
            onClick={() => {
              setText(content)
              toggleShow()
          }}><i className="glyphicon glyphicon-ok" /></Button>
          <Button
            bsSize="small"
            onClick={toggleShow}
            ><i className="glyphicon glyphicon-remove" /></Button>
        </div>
      </Popover>
    )
  }
}

export default PopoverOverlay
