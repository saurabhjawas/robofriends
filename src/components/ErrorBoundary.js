import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.state({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>Oops! that is not good</h1>
      )
    } else {
      return (
        <React.Fragment>
          {this.props.children}
        </React.Fragment>
      )
    }
  }
}

export default ErrorBoundary