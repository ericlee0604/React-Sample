import logo from './logo.svg';
import './App.css';
import routes from './routes/routes';
import { BrowserRouter as Route, Router , Redirect, Routes } from 'react-router-dom';
import SignIn from './sign/signin';
// import Landing from './landing/Landing';
import React from 'react';

const Sggnin = React.lazy(() => import("./sign/signin"));
const LandingPage = React.lazy(() => import("./landing/Landing"));

function App() {

  return (
    <div>
      <Routes>
        <Route index path='/' element={<React.Suspense fallback={<div>Loading...</div>}><LandingPage /></React.Suspense>} />
        <Route index path='/login' element={<React.Suspense fallback={<div>Loading...</div>}><SignIn /></React.Suspense>} />
        <Route path="signup" element={<React.Suspense fallback={<div>Loading...</div>}><SignUp /></React.Suspense>} />
      </Routes>
    </div>
  )
}

export default App;
