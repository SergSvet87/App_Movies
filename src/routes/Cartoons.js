import React from 'react'
import axios from 'axios'

import { ALL_FILMS_URL } from "../utils/urls"
import { Header, Animation, Footer } from '../components/index'
import { Loader } from '../ui/Loader/Loader'

class Cartoons extends React.Component {
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
        {isLoading ? <Loader /> : <Animation movies={movies} />}
        <Footer />
      </div >
    )
  }
}

export default Cartoons;
