// import React from 'react'


// import { Header, Films, Footer } from '../components/index'
// import { Loader } from '../ui/loader/Loader'

// class Movies extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//   }

//   getMovies = async () => {
//     const { data: { data: { movies } } } = await axios.get(ALL_FILMS_URL)
//     this.setState({ movies, isLoading: false })
//   }

//   componentDidMount() {
//     this.getMovies()
//   }

//   onSubmitHandler = (e) => {
//     e.preventDefault()
//     // setTextSearch('')
//   }

//   render() {
//     const { isLoading, movies } = this.state

//     return (
//       <div >
//         {isLoading ? <Loader /> : <Films movies={movies} />}
//       </div >
//     )
//   }
// }

// export default Movies;
