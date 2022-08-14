import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ImageForm from './pages/ImageForm';
import ImageDetail from './pages/ImageDetail';
import ImageGallery from './pages/ImageGallery';
 
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'

function App() {
  return (
    // <Router> // ya lo estoy encerrando en BrouseRouter en el index
      <div className='bg-dark text-light'>
        <Navbar/>
        <Routes> 
        <Route path='/upload' element={<ImageForm/>}/>
        <Route path='/images/:id' element={<ImageDetail/>}/>
        <Route path='/' element={<ImageGallery/>}/>
      </Routes>
      </div>
    // </Router>
  );
  
}

export default App;
