import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link as NavLink } from 'react-router-dom';
import { Pagination, PaginationItem, Stack } from '@mui/material';

import { BASE_URL } from '../../const';
import { POPULAR_FILMS_URL } from '../../const';
import {
  addData,
  addMovies,
  addPopularMovies,
} from '../../redux/movies/movieSlice';
import { Films } from './films/Films';
import { Loader } from '../../components/loader/Loader';
import { Sidebar } from './sidebar/Sidebar';

export const MoviesByGenrePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const dataFromStore = useSelector((state) => state.data.data);
  const movieCount = Number(dataFromStore.movie_count);
  const movieLimit = Number(dataFromStore.limit);
  const movieID = Number(dataFromStore.movies[0].id);

  const [page, setPage] = useState(parseInt(1));
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    axios.get(BASE_URL + `&page=${page}&genre=crime`).then(({ data }) => {
      dispatch(addData(data));
      dispatch(addMovies(data));
      setPageQty(Math.ceil(movieCount / movieLimit));

      if (pageQty < page) {
        setPage(parseInt(1));
      }
      setIsLoading(false);
    });

    axios.get(POPULAR_FILMS_URL + `movie_id=${movieID}`).then(
      ({
        data: {
          data: { movies },
        },
      }) => {
        dispatch(addPopularMovies({ movies }));
      }
    );
  }, [page, dispatch, movieCount, movieLimit, pageQty, movieID]);

  return (
    <div className="container">
      <div style={{ display: 'flex' }}>
        {isLoading ? <Loader /> : <Films />}
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
            sx={{ marginY: 3, marginX: 'auto' }}
            renderItem={(item) => (
              <PaginationItem
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
  //   }
};
