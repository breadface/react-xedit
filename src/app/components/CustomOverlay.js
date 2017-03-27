import React from 'react'
import { Overlay } from 'react-bootstrap'

class CustomOverlay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: this.props.show || false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.props.show) {
      this.setState({show: nextProps.show})
    }
  }

  render() {
    let { show } = this.state

    return (
      <Overlay
        show={show}
        placement="right"
        container={this}
        rootClose={true}
        onHide={() => this.setState({show: false})}
      >
        { this.props.children }
      </Overlay>
    )
  }
}

export default CustomOverlay
