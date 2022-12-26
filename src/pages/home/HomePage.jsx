import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Pagination, PaginationItem, Stack, Link } from '@mui/material';

import { BASE_URL } from '../../const';
import { POPULAR_FILMS_URL } from '../../const';
import { Loader } from '../../components/loader/Loader';
import {
  addData,
  addMovies,
  addPopularMovies,
} from '../../redux/movies/movieSlice';
import { Films } from './main/films/Films';
import { Sidebar } from './sidebar/Sidebar';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const dataFromStore = useSelector((state) => state.data.data);
  const movieCount = Number(dataFromStore.movie_count);
  const movieLimit = Number(dataFromStore.limit);

  const [page, setPage] = useState(parseInt(1));
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    axios.get(BASE_URL + `&page=${page}`).then(({data}) => {
      dispatch(addData(data));
      dispatch(addMovies(data));
      setPageQty(Math.ceil(movieCount / movieLimit));

    if (pageQty < page) {
      setPage(parseInt(1));
    }
      setIsLoading(false);
    });
    
  }, [page, dispatch, movieCount, movieLimit, pageQty]);

  // const getMovies = async () => {
  //   const {
  //     data: {
  //       data: { movies },
  //     },
  //   } = await axios.get(BASE_URL);
  //   dispatch(addMovies({ movies }));
  //   setIsLoading(false);
  // };

  const getPopularMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(POPULAR_FILMS_URL);
    dispatch(addPopularMovies({ movies }));
    setIsLoading(false);
  };

  // const togglePage = async () => {
  //   const {
  //     data: {
  //       data: { movies },
  //     },
  //   } = await axios.get(BASE_URL + `&page=${page}`);

  //   setPageQty(Math.ceil(movieCount / movieLimit));

  //   if (pageQty < page) {
  //     setPage(parseInt(1));
  //   }
  //   dispatch(addMovies({ movies }));
  //   setIsLoading(false);
  // };

  useEffect(() => {
    // getData();
    // getMovies();
    getPopularMovies();
    // togglePage();
  }, []);

  return (
    <div className="container">
      <div style={{ display: 'flex', paddingTop: '50px' }}>
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
            size="large"
            sx={{ marginY: 3, marginX: 'auto' }}
            renderItem={(item) => (
              <PaginationItem
                color="primary"
                component={NavLink}
                // onChange={togglePage}
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

export default HomePage;
