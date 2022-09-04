import './App.css';
import PlayMusic from './Component/MusicApp';
import Sessions from './Component/Sessions';
import Productdetails from './Component/Productdetails';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import FormikYupAxios from './Component/Formik_Yup_Axios';
import StudentManager from './Component/StudentManager/index';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='navbar'>
          <ul>
            <li><Link to='/'>Music Player</Link></li>
            <li><Link to='/button'>Button</Link></li>
            <li><Link to='/productdetails'>Product details</Link></li>
            <li><Link to='/formik_yub'>Formik-Yub-Axios</Link></li>
            <li><Link to='/student-manager'>Student Manager</Link></li>
          </ul>
        </div>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<PlayMusic />} />
            <Route path='/button' element={<Sessions />} />
            <Route path='/productdetails' element={<Productdetails />} />
            <Route path='/formik_yub' element={<FormikYupAxios />} />
            <Route path='/student-manager' element={<StudentManager />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
