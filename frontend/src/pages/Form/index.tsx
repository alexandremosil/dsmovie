import FormCard from 'components/FormCard';
import { /*Link,*/ useParams } from 'react-router-dom';
// import { Movie } from 'types/movie';
//import './styles.css'; Foi pro component FormCard

// type Props = {
//   movie: Movie;
// };

function Form() {
  const params = useParams();

  return <FormCard movieId={`${params.movieId}`} />;
}

export default Form;
