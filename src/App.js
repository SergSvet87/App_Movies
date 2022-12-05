import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { TVSeries, Movies, Cartoons, About } from './routes/index'

class App extends React.Component {

  render() {
    return (
      <Routes>
        <Route path="/series" element={<TVSeries />} />
        <Route path="/" exact element={<Movies />} />
        <Route path="/animation" element={<Cartoons />} />
        <Route path="/about" element={<About />} />
      </Routes >
    )
  }
}

export default App;
