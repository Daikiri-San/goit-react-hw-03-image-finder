import React, { Component } from 'react';
import IntObserver from '../view/IntObserver';

class IntObserver extends Component {
  componentDidMount() {
    const { fetchImages } = this.props;
    const guard = document.querySelector('#guardian');
    IntObserver(guard, fetchImages);
  }

  render() {
    return <div id="guardian"></div>;
  }
}

export default IntObserver;
