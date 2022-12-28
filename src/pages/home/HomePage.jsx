import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Pagination, PaginationItem, Stack } from '@mui/material';

import { POPULAR_FILMS_URL } from '../../const';
import {
  useGetMoviesQuery,
  addPopularMovies,
} from '../../redux/movies/movieSlice';
import { Loader } from '../../components/loader/Loader';
import { Films } from '../../components/main/films/Films';
import { Sidebar } from '../../components/main/sidebar/Sidebar';
import { Slider } from '../../components/slider/Slider';

export const HomePage = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetMoviesQuery(page);

  const movieLimit = data === undefined ? '' : data.data.limit;
  const movieCount = data === undefined ? '' : data.data.movie_count;
  const movieId = data === undefined ? '' : data.data.movies[2].id;
  const pageQty = Math.ceil(movieCount / movieLimit);

  useEffect(() => {
    if (data !== undefined) {
      axios.get(POPULAR_FILMS_URL + `movie_id=${movieId}`).then(
        ({
          data: {
            data: { movies },
          },
        }) => {
          dispatch(addPopularMovies({ movies }));
        }
      );
    }
  }, [dispatch, movieId, data]);

  return (
    <div className="container">
      <Slider />
      <div style={{ display: 'flex', paddingTop: '50px' }}>
        {isLoading ? <Loader /> : <Films movies={data.data.movies} />}
        {isLoading ? <Loader /> : <Sidebar />}
      </div>
      <Stack spacing={2}>
        {pageQty && (
          <Pagination
            color="primary"
            count={pageQty}
            page={page}
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
            size="large"
            sx={{ marginY: 3, marginX: 'auto' }}
            renderItem={(item) => (
              <PaginationItem
                color="primary"
                component={NavLink}
                to={`/?page=${item.page}`}
                {...item}
              />
            )}
          />
        )}
      </Stack>
    </div>
  );
};
