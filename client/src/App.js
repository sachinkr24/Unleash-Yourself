// import logo from './logo.svg';
import './App.css';
//components

import Login from './components/account/Login';
import DataProvider from './context/DataProvider';
import Home from './components/home/Home';
import Header from './components/header/Header';
import {BrowserRouter, Routes, Route , Outlet , Navigate} from 'react-router-dom';
import { useState } from 'react';
function App() {
 const PrivateRoute = ({ isAuthenticated ,...props }) =>{
  return isAuthenticated?
  <>
  <Header/>
  <Outlet/>
  </>
  : <Navigate replace to = '/login' />
 }
  const[isAuthenticated,isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
      
      <div style={{marginTop:64}}>
      <Routes>

      <Route path = '/login' element={<Login isUserAuthenticated={isUserAuthenticated} /> }/>
      <Route path = '/' element = {<PrivateRoute isAuthenticated ={isAuthenticated} />} >
      <Route path = '/' element={<Home/>}/>
      </Route>
      </Routes>

      </div>
      </BrowserRouter>
    
    </DataProvider>
  );
}

export default App;
