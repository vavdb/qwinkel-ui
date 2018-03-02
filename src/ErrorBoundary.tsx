import * as React from 'react';

export default class ErrorBoundary extends React.Component {
  state = {
    error: undefined
  };

  componentDidCatch(error: any, info: any) {
    this.setState({ error });
    console.error('[Caught in ErrorBoundary]', error, info);
  }

  render() {
    if (this.state.error) {
      return <p>Oops! Something went wrong...</p>;
    }

    return this.props.children;
  }
}
