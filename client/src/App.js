// import logo from './logo.svg';
import './App.css';
//components
<<<<<<< HEAD
import CreatePost from './create/CreatePost';
=======
import CreatePost from './components/create/CreatePost';
import Update from './components/create/Update';
>>>>>>> 6b5dfd9015e0f3fb8b12de1e31100e8dd84cbb32
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
 
  return isAuthenticated  &&token?
  <>
  <Header/>
  <Outlet/>
  </>
  : <Navigate replace to = '/Login' />
 }
  const[isAuthenticated,isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
      
      <div style={{marginTop:64}}>
      <Routes>

<<<<<<< HEAD
      <Route path = '/login' element={<Login isUserAuthenticated={isUserAuthenticated} /> }/>

      <Route path = '/' element = {<PrivateRoute isAuthenticated ={isAuthenticated} />} >
        <Route path = '/' element={<Home/>}/>
      </Route>

      <Route path = '/create' element = {<PrivateRoute isAuthenticated ={isAuthenticated} />} >
        <Route path = '/create' element={<CreatePost/>}/>
      </Route>


      </Routes>
=======
      <Route path='/Login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
      <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
             </Route>

             <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
            </Route>

            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/details/:id' element={<DetailView />} />
            </Route>
      <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/update/:id' element={<Update />} />
            </Route>

            </Routes>
      
>>>>>>> 6b5dfd9015e0f3fb8b12de1e31100e8dd84cbb32

      </div>
      </BrowserRouter>
    
    </DataProvider>
  );
}

export default App;
