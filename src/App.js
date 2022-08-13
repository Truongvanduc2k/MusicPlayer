import './App.css';
import PlayMusic from './Component/MusicApp';
import Sessions from './Component/Sessions';
import Productdetails from './Productdetails';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='navbar'>
          <ul>
            <li><Link to='/'>Music Player</Link></li>
            <li><Link to='/button'>Button</Link></li>
            <li><Link to='/productdetails'>Product details</Link></li>
          </ul>
        </div>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<PlayMusic />} />
            <Route path='/button' element={<Sessions />} />
            <Route path='/productdetails' element={<Productdetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
