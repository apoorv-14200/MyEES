import React from "react";

interface State {
  error: null | any;
}

class ErrorBoundary extends React.Component<{}, State> {
  state = { error: null };

  // static getDerivedStateFromError(error: any) {
  //   // TODO sentry capture
  //   Sentry.captureException(JSON.stringify(error));
  //   return {
  //     error,
  //   };
  // }

  render() {
    const { error } = this.state;

    if (!!error) {
      // TODO style
      return (
        <div>
          Whoops! Error
          <br />
          <br />
          <button
            onClick={(e) => {
              e.preventDefault();
              this.setState({ error: null });
              // updateFetchKey();
            }}
          >
            Retry
          </button>
          <br />
          <br />
          <div>{JSON.stringify(error)}</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
