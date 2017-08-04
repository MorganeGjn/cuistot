import React from 'react';

import Full from './full';
import Half from './half';
import Empty from './empty';

export default class Rating extends React.Component {
  render() {
    const note = this.props.rating;

    if (note < 0.5) {
      return (
        <span>
          <Empty />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
        </span>
      );
    }
    if (note < 1) {
      return (
        <span>
          <Half />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
        </span>
      );
    }
    if (note < 1.5) {
      return (
        <span>
          <Full />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
        </span>
      );
    }
    if (note < 2) {
      return (
        <span>
          <Full />
          <Half />
          <Empty />
          <Empty />
          <Empty />
        </span>
      );
    }
    if (note < 2.5) {
      return (
        <span>
          <Full />
          <Full />
          <Empty />
          <Empty />
          <Empty />
        </span>
      );
    }
    if (note < 3) {
      return (
        <span>
          <Full />
          <Full />
          <Half />
          <Empty />
          <Empty />
        </span>
      );
    }
    if (note < 3.5) {
      return (
        <span>
          <Full />
          <Full />
          <Full />
          <Empty />
          <Empty />
        </span>
      );
    }
    if (note < 4) {
      return (
        <span>
          <Full />
          <Full />
          <Full />
          <Half />
          <Empty />
        </span>
      );
    }
    if (note < 4.5) {
      return (
        <span>
          <Full />
          <Full />
          <Full />
          <Full />
          <Empty />
        </span>
      );
    }
    if (note < 5)
      return (
        <span>
          <Full />
          <Full />
          <Full />
          <Full />
          <Half />
        </span>
      );
    if (note >= 5) {
      return (
        <span>
          <Full />
          <Full />
          <Full />
          <Full />
          <Full />
        </span>
      );
    }
  }
}
