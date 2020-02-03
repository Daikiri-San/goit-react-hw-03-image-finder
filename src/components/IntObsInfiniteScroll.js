import React, { Component } from 'react';
import IntObserver from '../view/IntObserver';

class IntObsInfiniteScroll extends Component {
  guardian = React.createRef();

  componentDidMount() {
    const { fetchImages } = this.props;
    IntObserver(this.guardian.current, fetchImages);
  }

  render() {
    return <div ref={this.guardian}></div>;
  }
}

export default IntObsInfiniteScroll;
