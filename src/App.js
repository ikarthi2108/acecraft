import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Acecraft from './Components/Acecraft';
import Footer from './Components/Footer';
import Notes from './Components/Notes';
 import School from './Components/School';
import College from './Components/College';
import Enterprice from './Components/Enterprise';
import Airenmask from './Components/Arienmask'
import Errorcomponent from './Components/Errorcomponent';


function App() {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route exact path='/' element={<Acecraft />} />
        <Route exact path='School' element={<School />} /> 
        <Route exact path='College' element={<College />} />
        <Route exact path='Enterprise' element={<Enterprice />} />
        <Route exact path='Notes' element={<Notes />} />
        <Route exact path='Airenmask' element={<Airenmask />} />
        <Route path='*' element={<Errorcomponent />}/>


      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
