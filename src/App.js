import React from 'react'
import axios from 'axios'

import { ALL_FILMS_URL } from "./urls"
import {Movies} from './components/Main/Movies'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import {Loader} from './ui/Loader/Loader'

class App extends React.Component {
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
      <section className="container">
        <Header />
        {isLoading ? <Loader /> : <Movies movies={movies}/>}
        <Footer />
      </section>
    )
  }
}

export default App;
