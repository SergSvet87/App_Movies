import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Pagination, PaginationItem, Stack } from '@mui/material';

import { BASE_URL } from '../../const';
import { POPULAR_FILMS_URL } from '../../const';
import { Loader } from '../../components/loader/Loader';
import { addMovies, addPopularMovies } from '../../redux/movies/movieSlice';
import { Films } from './main/films/Films';
import { Sidebar } from './sidebar/Sidebar';

const HomePage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const [page, setPage] = useState(parseInt(1));
  const [pageQty, setPageQty] = useState(10);

  useEffect(() => {
    axios.get(BASE_URL + `page=${page}`).then(({ data }) => {
      setPageQty(data.nbPages);

      if (data.nbPages < page) {
        setPage(1);
        props.history.replace('&');
      }
    });
  }, [page, props.history]);

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(BASE_URL);
    dispatch(addMovies({ movies }));
    setIsLoading(false);
  };

  const getPopularMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(POPULAR_FILMS_URL);
    dispatch(addPopularMovies({ movies }));
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
    getPopularMovies();
  }, []);

  return (
    <div className="container">
      <div style={{ display: 'flex', paddingTop: '50px' }}>
        {isLoading ? <Loader /> : <Films />}
        {isLoading ? <Loader /> : <Sidebar />}
      </div>
      <Stack spacing={2}>
        {/* {pageQty && ( */}
        <Pagination
          color="primary"
          count="10"
          page={page}
          onChange={(_, num) => setPage(num)}
          showFirstButton
          showLastButton
          size="large"
          sx={{ marginY: 3, marginX: 'auto' }}
          renderItem={(item) => (
            <PaginationItem
              color="primary"
              component={Link}
              to={`&page=${item.page}`}
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
