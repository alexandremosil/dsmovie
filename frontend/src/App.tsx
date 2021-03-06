import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import About from 'pages/About';
import Navbar from 'components/Navbar';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Listing />} />
        <Route path='/form'>
          <Route path=':movieId' element={<Form />} />
        </Route>
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
