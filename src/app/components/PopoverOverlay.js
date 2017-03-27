import React from 'react'
import { Popover, Button, ButtonToolbar, FormGroup } from 'react-bootstrap'

class PopoverOverlay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: this.props.content || ""
    }
  }

  render() {
    let { content } = this.state
    let  { setText, toggleShow, title } = this.props

    let handleChange = e => {
      let content = e.target ? e.target.value : e
      this.setState({content})
    }

    return (
      <Popover
        id="popover-trigger-click-root-close"
        title={`Enter ${title}`}
      >
        <FormGroup>
          { this.props.children(content, handleChange) }
          <ButtonToolbar>
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
              ><i className="glyphicon glyphicon-remove" />
            </Button>
          </ButtonToolbar>
        </FormGroup>
      </Popover>
    )
  }
}

export default PopoverOverlay
