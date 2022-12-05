import React from 'react'
import axios from 'axios'

import { ALL_FILMS_URL } from "../urls"
import { Header, Series, Footer } from '../components/index'
import { Loader } from '../ui/Loader/Loader'

class TVSeries extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get(ALL_FILMS_URL)
    this.setState({ movies, isLoading: false })
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const { isLoading, movies } = this.state

    return (
      <div className="wrapper">
        <Header />
        {isLoading ? <Loader /> : <Series movies={movies} />}
        <Footer />
      </div>
    )
  }
}

export default TVSeries;
