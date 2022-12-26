import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link as NavLink } from 'react-router-dom';
import { Pagination, PaginationItem, Stack } from '@mui/material';

import { POPULAR_FILMS_URL } from '../../const';
import { Films } from './films/Films';
import { Loader } from '../../components/loader/Loader';
import { addMovies } from '../../redux/movies/movieSlice';
import { addPopularMovies } from '../../redux/movies/movieSlice';
import { Sidebar } from './sidebar/Sidebar';

export const MoviesByGenrePage = (props) => {
  const [movies, setMovies] = useState({});
  const [popularMovies, setPopularMovies] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const [page, setPage] = useState(parseInt(1));
  const [pageQty, setPageQty] = useState(10);

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
