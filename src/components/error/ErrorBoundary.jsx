import { PureComponent } from 'react'

const AppError = ({ error }) => {
  return (
    <div>
      <h2>Something went wrong.</h2>
      <details style={{ whiteSpace: 'pre-wrap' }}>{error.toString()}</details>
    </div>
  )
}

export default class ErrorBoundary extends PureComponent {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    const { hasError, error } = this.state
    const { children } = this.props

    if (hasError) {
      return <AppError error={error} />
    }
    return children
  }

  componentDidCatch(error, errorInfo) {
    console.log(error)
  }
}
