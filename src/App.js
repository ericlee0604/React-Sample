import React, {Suspense, lazy} from "react";
import './App.css';
import routes from './routes/routes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from './landing/Landing';
import "bootstrap/dist/css/bootstrap.min.css"

const SignPage = lazy(() => import("./sign/signin"));
const SignupPage = lazy(() => import("./sign/signup"));
const LandingPage = lazy(() => import("./landing/Landing"));

function App() {

  return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path='' element={<LandingPage />} />
            <Route exact path='/login' element={<SignPage />} />
            <Route exact path='/signup' element={<SignupPage />} />
            {/* <Route path="signup" element={} /> */}
          </Routes>
        </Suspense>
      </Router>
  )
}

export default App;
