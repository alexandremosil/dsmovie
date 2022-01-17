import Pagination from 'components/Pagination';
import MovieCard from 'components/MovieCard';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';
import { useEffect, useState } from 'react';
import { MoviePage } from 'types/movie';

function Listing() {
  // useState hook
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

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
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
      .then((response) => {
        const data = response.data as MoviePage;
        // DEBUG:
        // console.log(data); // Exibe no console apenas uma vez
        // setPageNumber(data.number);
        setPage(data);
      });
  }, [pageNumber]);

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  return (
    <>
      <Pagination page={page} onChange={handlePageChange} />
      <div className='container'>
        <div className='row'>
          {page.content.map((movie) => (
            <div key={movie.id} className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Listing;
