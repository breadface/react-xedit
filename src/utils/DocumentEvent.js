import React, { Component } from 'react'

/*
  This component only binds to a document event and cleans up unmount
  @flow
*/

class DocumentEvent extends Component {
  unbind: () => void;

  props: {
    handler: (e: any) => void,
    name: string,
    passive?: boolean
  }

  componentDidMount() {
    let fn = (e) => {
      if(this.props.passive)
        e.preventDefault();

      this.props.handler(e);
    }
    document.addEventListener(this.props.name, fn);

    this.unbind = () => {
      document.removeEventListener(this.props.name, fn);
    }
  }

  componentWillUnmount() {
    this.unbind();
  }

  render() {
    return null;
  }
}

export default DocumentEvent;
