import React from 'react'

import './ErrorFallback.scss'

export const ErrorFallback = ({ error }) => {
  return (
    <div className="error" role="alert">
      <p>Something went wrong:</p>
      <pre>{error}</pre>
      {/* <button onClick={resetErrorBoundary}>Try again</button> */}
    </div>
  )
}
