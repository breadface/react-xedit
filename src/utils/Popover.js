import React, { Component } from 'react';
import calculatePopoverPosition from './calculatePopoverPosition';

let popoverStyles = {
  position: 'absolute',
  padding: "20px",
  backgroundColor: 'yellow'
}


class Popover extends Component {
  props: {
    text: any,
    children: any,
    show: boolean
  }

  state: {
    popoverPosition: any,
    show: boolean
  }

  state = {
    popoverPosition: null,
    show: false
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.show) {
      this.setState({show: nextProps.show})
    }
  }

  render() {

    let handleClick = () => {
      this.setState({show: !this.state.show}, () => {
        if(this.popoverRef){
          let popoverPosition = calculatePopoverPosition(
            this.popoverRef.getBoundingClientRect(),
            this.editableTextRef.getBoundingClientRect()
          )
          this.setState({popoverPosition})
        }
      })
    }

    return (
      <div>
        <span
          ref={ ref => this.editableTextRef = ref }
          onClick={handleClick}
          children={this.props.text}
        />
        { this.state.show &&
          <div
            style={{...popoverStyles, ...this.state.popoverPosition}}
            ref={ ref => this.popoverRef = ref}>
            { this.props.children }
          </div>
        }
      </div>
    )
  }
}


export default Popover
