import './styles/cgvSignup.css'
import './styles/cgv.css'
// import './styles/commons.css'
import './styles/shoppy.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Products } from './pages/Products.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { Home } from './pages/Home.jsx';
import { Layout } from './pages/Layout.jsx'
import { useEffect,useState } from 'react';

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element = {<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/all' element={<Products/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


