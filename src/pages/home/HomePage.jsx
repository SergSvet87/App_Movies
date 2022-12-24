import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link as NavLink } from 'react-router-dom';
import { Pagination, PaginationItem, Stack } from '@mui/material';

import { BASE_URL } from '../../const';
import { ALL_FILMS_URL } from '../../const';
import { POPULAR_FILMS_URL } from '../../const';
import { Films } from './main/films/Films';
import { Loader } from '../../components/loader/Loader';
import { addMovies } from '../../redux/movies/movieSlice';
import { addPopularMovies } from '../../redux/movies/movieSlice';
import { Sidebar } from './sidebar/Sidebar';

const HomePage = (props) => {
  const [movies, setMovies] = useState({});
  const [popularMovies, setPopularMovies] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const [page, setPage] = useState(parseInt(1));
  const [pageQty, setPageQty] = useState(10);

  useEffect(() => {
    axios.get(BASE_URL + `page=${page}`).then(({ data }) => {
      setPageQty(data.nbPages);

      if (data.nbPages < page) {
        setPage(1);
        props.history.replace('/');
      }
    });
  }, [page, props.history]);

  const getMovies = async () => {
    const {
      data: { data },
    } = await axios.get(ALL_FILMS_URL);
    setMovies({ movies });
    dispatch(addMovies(data));
    setIsLoading(false);
  };

  const getPopularMovies = async () => {
    const {
      data: { data },
    } = await axios.get(POPULAR_FILMS_URL);
    setPopularMovies({ popularMovies });
    dispatch(addPopularMovies(data));
    setIsLoading(false);
  };
  console.log(popularMovies);

  useEffect(() => {
    getMovies();
    getPopularMovies();
  }, []);

  return (
    <div className="container">
      <div style={{ display: 'flex' }}>
        {isLoading ? <Loader /> : <Films movies={movies.movies} />}
        {isLoading ? <Loader /> : <Sidebar movies={movies.movies} />}
      </div>
      <Stack spacing={2}>
        {/* {pageQty && ( */}
        <Pagination
          color="primary"
          count={pageQty}
          page={page}
          onChange={(_, num) => setPage(num)}
          showFirstButton
          showLastButton
          sx={{ marginY: 3, marginX: 'auto' }}
          renderItem={(item) => (
            <PaginationItem
              component={NavLink}
              to={`/?page=${item.page}`}
              {...item}
            />
          )}
        />
        {/* )} */}
      </Stack>
    </div>
  );
  //   }
};

export default HomePage;
