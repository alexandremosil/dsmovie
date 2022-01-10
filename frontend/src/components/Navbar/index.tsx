import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>DSMovie</h1>
          {/* <JavaIcon /> Apenas um teste*/}
          <a
            href='https://github.com/alexandremosilva/dsmovie'
            target='_blank'
            rel='noreferrer'
          >
            <div className='dsmovie-contact-container'>
              <GithubIcon />
              <p className='dsmovie-contact-link'>/alexandremosil</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
