import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Home from './components/Home';
import MidPage from './components/MidPage';
import Pages from './components/Pages';
import Stories from './components/Stories';
import Love from './components/Love';
import Astronaut from './components/Astronaut';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedExp from './components/SharedExp';

function App() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>
            <Home />
            <MidPage />
            <Pages />
            <Stories />
            <Love />
            <Astronaut />
          </>}></Route>
          <Route path='/shared-experiences' element={
            <SharedExp />
          }></Route>
          <Route path='*'>
            <>404 REQUEST</>
            </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
