import Pagination from 'components/Pagination';
import MovieCard from 'components/MovieCard';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';
import { useEffect, useState } from 'react';
import { MoviePage } from 'types/movie';

function Listing() {
  // useState hook
  const [pageNumber, setPageNumber] = useState(0);

  // FORMA ERRADA!
  // Chama backend duas vezes
  // Passa pela função mais de uma vez se não estiver ligado ao ciclo de vida
  // axios.get(`${BASE_URL}/movies?size=12&page=0`).then((response) => {
  //   console.log(response.data);
  // });
  // ou
  //axios.get(`${BASE_URL}/movies?size=12&page=1`).then((response) => {
  //  const data = response.data as MoviePage;
  //  setPageNumber(data.number);
  //});

  // Utilizar userEffect
  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=1`).then((response) => {
      const data = response.data as MoviePage;
      console.log(data); // Exibe no console apenas uma vez
      setPageNumber(data.number);
    });
  }, []);

  return (
    <>
      <p>{pageNumber}</p>
      <Pagination />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
            <MovieCard />
          </div>
          <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
            <MovieCard />
          </div>
          <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
            <MovieCard />
          </div>
          <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
            <MovieCard />
          </div>
          <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
            <MovieCard />
          </div>
          <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
