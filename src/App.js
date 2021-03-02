import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark'>
        <a href='/' className='navbar-brand mx-auto'>
          <img
            className='d-inline-block mr-2'
            src='./logo192.png'
            alt='Logo'
            width='30'
            height='30'
          />
          Wegonews
        </a>
      </nav>
      <main className='content'>
        <Navbar />
        <News />
      </main>
    </div>
  );
}

export default App;
