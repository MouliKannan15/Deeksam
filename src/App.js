import './App.css';


import {BrowserRouter,Routes,Route} from "react-router-dom";


import Home from './project/home';
import About from './project/pages/aboutus';
import Contact from './project/pages/contact';
import Coconut from './project/pages/coconut';
import Groundnut from './project/pages/groundnut';
import Sesameoil from './project/pages/sesameoil';
import LoginPage from './project/pages/login';


import Term from './project/pages/term';
import Refund from './project/pages/refund';
import Policy from './project/pages/policy';


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

function App () {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          tens: true, // Whether animation should happen only once - while scrolling down
        });
      }, []); 
    return(
        <>
    
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/coconut' element={<Coconut/>}></Route>
            <Route path='/groundnut' element={<Groundnut/>}></Route>
            <Route path='/sesameoil' element={<Sesameoil/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>


            <Route path='/term' element={<Term/>}></Route>
            <Route path='/refund' element={<Refund/>}></Route>
            <Route path='/policy' element={<Policy/>}></Route>
        </Routes>
        </BrowserRouter> 
       
        </>
    )
}

export default App;
