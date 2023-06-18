// import logo from './logo.svg';
import './App.css';
//components
import CreatePost from './components/create/CreatePost';
import Login from './components/account/Login';
import DataProvider from './context/DataProvider';
import Home from './components/home/Home';
import Header from './components/header/Header';
import {BrowserRouter, Routes, Route , Outlet , Navigate} from 'react-router-dom';
import DetailView from './components/details/DetailView';
import { useState } from 'react';
function App() {
 const PrivateRoute = ({ isAuthenticate ,...props }) =>{
  const token =sessionStorage.getItem('accessToken');
  return isAuthenticated &&token?
  <>
  <Header/>
  <Outlet/>
  </>
  : <Navigate replace to = '/account' />
 }
  const[isAuthenticated,isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
      
      <div style={{marginTop:64}}>
      <Routes>

      <Route path='/account' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
      <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
             </Route>

      <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
             </Route>

             <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/details/:id' element={<DetailView />} />
            </Route>

            </Routes>
      

      </div>
      </BrowserRouter>
    
    </DataProvider>
  );
}

export default App;
