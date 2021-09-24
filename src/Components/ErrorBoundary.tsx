import React from 'react'
import Error from './ErrorPage'

class ErrorBoundary extends React.Component {
  state: { hasError: boolean }
  constructor(props: {}) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Error />
    }
    return this.props.children
  }
}

export default ErrorBoundary
