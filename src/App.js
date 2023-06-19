import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Acecraft from './Components/Acecraft';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
    <Navbar/>
    

    <Routes>
        <Route exact path='Homepage' element={<Acecraft />} />
        <Route exact path='' element={<Acecraft />} />
        <Route exact path='' element={<Acecraft />} />
        <Route exact path='' element={<Acecraft />} />

       
    </Routes>

    <Footer />
    </div>
  );
}

export default App;
