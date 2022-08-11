import './App.css';
import PlayMusic from './Component/MusicApp';
import Sessions from './Component/Sessions';
import Productdetails from './Productdetails';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <PlayMusic></PlayMusic>
      {/* <Sessions /> */}
      {/* <Productdetails /> */}
    </div>
  );
}

export default App;
