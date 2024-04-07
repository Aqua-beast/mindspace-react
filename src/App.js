import './App.css'
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Home from './components/Home';
import MidPage from './components/MidPage';
import Pages from './components/Pages';
import Stories from './components/Stories';
import Love from './components/Love';
import Astronaut from './components/Astronaut';
import Footer from './components/Footer';
import SharedExp from './components/SharedExp';
import Auth from './components/Auth';
import './config'
import Profile from './components/Profile';
import { MyContext } from './MyContext';
import Blogs from './components/Blogs';
import Volunteers from './components/Volunteers';

function NotFound() {

  return (
    <div style={{ padding: '2rem', margin: '2rem', height: '54vh' }}>
      <p style={{ color: 'red', fontSize: '4rem', textAlign: 'center' }}>404 REQUEST :( </p>
    </div>
  );
}

function App() {
  const [userInfo, setUserInfo] = useState(false);

  // useEffect(() => {
  //   const storedUserInfo = localStorage.getItem('userInfo');
  //   if (storedUserInfo) {
  //     setUserInfo(JSON.parse(storedUserInfo));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('userInfo', JSON.stringify(userInfo));
  // }, [userInfo]);


  return (
    <>
      <MyContext.Provider value={{ userInfo, setUserInfo }}>
        <Navbar />
        <Navbar2 />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <>
                <Home />
                <MidPage />
                <Pages />
                <Stories />
                <Love />
                <Astronaut />
              </>
            } />
            <Route path='/shared-experiences' element={<SharedExp />} />
            <Route path='/volunteers' element={<Volunteers />} />
            <Route path='/about' element={
              <>
                <Astronaut />
                <MidPage />
              </>
            } />
            <Route path='/:id' element={<NotFound />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/blogs' element={<Blogs />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
